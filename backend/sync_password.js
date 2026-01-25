
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function syncPassword() {
    try {
        // Hash for 'Hellt0cell'
        const hash = '$2b$10$1LEkAT0w4GZ17q95zGT7heoR/hx7lOyZk7IHmdDwqeTF1KjcBAtVS';

        console.log('Syncing password for gsouleman@gmail.com to Cloud DB...');
        const res = await pool.query(
            'UPDATE users SET password_hash = $1, must_change_password = false WHERE email = $2 RETURNING id, email',
            [hash, 'gsouleman@gmail.com']
        );

        if (res.rows.length > 0) {
            console.log('✅ Password synced successfully for:', res.rows[0].email);
        } else {
            console.log('❌ User not found, could not sync password.');
        }
    } catch (err) {
        console.error('Error updating DB:', err);
    } finally {
        await pool.end();
    }
}

syncPassword();
