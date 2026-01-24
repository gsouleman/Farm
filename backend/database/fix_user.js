const { Client } = require('pg');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

async function fixUser() {
    try {
        await client.connect();

        const email = 'gsouleman@gmail.com';
        const password = 'Hellt0cell';
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user exists
        const res = await client.query('SELECT * FROM users WHERE email = $1', [email]);

        if (res.rows.length > 0) {
            console.log('User found. Updating password and role...');
            await client.query(
                `UPDATE users 
                 SET password_hash = $1, role = 'admin', must_change_password = false 
                 WHERE email = $2`,
                [hashedPassword, email]
            );
            console.log('✅ User updated successfully.');
        } else {
            console.log('User not found. Creating new admin user...');
            await client.query(
                `INSERT INTO users (email, password_hash, full_name, role, must_change_password)
                 VALUES ($1, $2, 'G Souleman', 'admin', false)`,
                [email, hashedPassword]
            );
            console.log('✅ User created successfully.');
        }

    } catch (error) {
        console.error('Error fixing user:', error);
    } finally {
        await client.end();
    }
}

fixUser();
