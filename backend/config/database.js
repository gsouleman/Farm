
// Check for Mock Mode
if (process.env.USE_MOCK_DB === 'true') {
    console.log('⚠️  USING MOCK DATABASE (Offline Mode)');
    module.exports = require('./database-mock');
} else {
    // Real PostgreSQL Connection
    const { Pool } = require('pg');

    console.log('DB Config: Checking DATABASE_URL...');
    if (!process.env.DATABASE_URL) {
        console.error('❌ DATABASE_URL is undefined!');
    } else {
        console.log('✅ DATABASE_URL is defined (starts with: ' + process.env.DATABASE_URL.substring(0, 15) + '...)');
    }

    const pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });

    pool.on('connect', () => {
        console.log('✅ Connected to PostgreSQL database');
    });

    pool.on('error', (err) => {
        console.error('❌ Unexpected error on idle client', err);
        process.exit(-1);
    });

    module.exports = {
        query: (text, params) => pool.query(text, params),
        pool
    };
}
