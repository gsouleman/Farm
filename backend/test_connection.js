require('dotenv').config();
const db = require('./config/database');

async function testConnection() {
    try {
        console.log('Testing connection from config/database.js...');
        const res = await db.query('SELECT NOW()');
        console.log('✅ Connection successful! Server time:', res.rows[0].now);
        await db.pool.end();
    } catch (err) {
        console.error('❌ Connection failed:', err);
        process.exit(1);
    }
}

testConnection();
