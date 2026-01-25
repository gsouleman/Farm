
require('dotenv').config();
const { Pool } = require('pg');

const variants = [
    {
        name: 'Variant 1: Pure Connection String',
        config: {
            connectionString: process.env.DATABASE_URL
        }
    },
    {
        name: 'Variant 2: Explicit SSL (rejectUnauthorized: false)',
        config: {
            connectionString: process.env.DATABASE_URL.split('?')[0] + '?sslmode=require', // strip complex params for safety
            ssl: { rejectUnauthorized: false }
        }
    },
    {
        name: 'Variant 3: Explicit SSL (rejectUnauthorized: true)',
        config: {
            connectionString: process.env.DATABASE_URL.split('?')[0],
            ssl: { rejectUnauthorized: true }
        }
    }
];

async function testVariant(variant) {
    console.log(`\n--- Testing ${variant.name} ---`);
    console.log('Config:', JSON.stringify({ ...variant.config, connectionString: 'HIDDEN' }, null, 2));

    const pool = new Pool(variant.config);
    try {
        const client = await pool.connect();
        const res = await client.query('SELECT NOW() as now');
        console.log('✅ SUCCESS! Connected. Server time:', res.rows[0].now);
        client.release();
        return true;
    } catch (err) {
        console.log('❌ FAILED:', err.message);
        if (err.code) console.log('   Code:', err.code);
        return false;
    } finally {
        await pool.end();
    }
}

async function run() {
    console.log('Starting SSL Diagnostic...');

    // Override mock setting for this test
    process.env.USE_MOCK_DB = 'false';

    for (const variant of variants) {
        const success = await testVariant(variant);
        if (success) {
            console.log('\n🎉 FOUND WORKING CONFIGURATION!');
            console.log('Recommendation: Update database.js to use this config.');
            return;
        }
    }
    console.log('\n❌ All variants failed.');
}

run();
