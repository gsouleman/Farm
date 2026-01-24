const { Client } = require('pg');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

async function seedAdmin() {
    try {
        await client.connect();
        console.log('✅ Connected to database');

        // Create or Update Admin User
        const email = 'admin'; // Using simple username as requested, though schema says email. 
        // Wait, schema says email column. User requested "user name: admin". 
        // I should probably support "admin" as an email-like string or just use "admin@local" but display "admin".
        // Or better, I'll use "admin@farm.com" but maybe I can adjust the schema to allow username OR email login?
        // The user explicitly said: "defaut user name : admin".
        // Let's assume the email field can hold 'admin' or I should update schema to accept username.
        // `email VARCHAR(255) UNIQUE NOT NULL` -> it can hold 'admin' string, it's just a varchar.
        // It's better to stick to the requested "admin" username.

        const password = 'admin';
        const passwordHash = await bcrypt.hash(password, 10);

        // Check if admin exists
        const checkResult = await client.query('SELECT id FROM users WHERE email = $1', ['admin']);

        if (checkResult.rows.length > 0) {
            console.log('Admin user already exists. Updating password and role...');
            await client.query(
                `UPDATE users 
                 SET password_hash = $1, role = 'admin', must_change_password = true 
                 WHERE email = 'admin'`,
                [passwordHash]
            );
        } else {
            console.log('Creating admin user...');
            await client.query(
                `INSERT INTO users (email, password_hash, full_name, role, must_change_password)
                 VALUES ($1, $2, 'System Administrator', 'admin', true)`,
                ['admin', passwordHash]
            );
        }

        console.log('✅ Admin user seeded successfully.');
        console.log('Username: admin');
        console.log('Password: admin');

    } catch (error) {
        console.error('Error seeding admin:', error);
    } finally {
        await client.end();
    }
}

seedAdmin();
