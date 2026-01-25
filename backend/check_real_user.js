
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function checkUser() {
    try {
        const res = await pool.query('SELECT id, email, role FROM users WHERE email = $1', ['gsouleman@gmail.com']);
        if (res.rows.length > 0) {
            console.log('✅ User exists in Neon DB:', res.rows[0]);
        } else {
            console.log('❌ User NOT found in Neon DB.');
        }
    } catch (err) {
        console.error('Error querying DB:', err);
    } finally {
        await pool.end();
    }
}

checkUser();
