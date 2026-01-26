
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function inspect() {
    try {
        await client.connect();
        console.log('Connected!');

        console.log('\n--- USERS ---');
        const users = await client.query('SELECT id, email, full_name, role FROM users');
        console.table(users.rows);

        console.log('\n--- FARMS ---');
        const farms = await client.query('SELECT * FROM farms');
        console.table(farms.rows);

        if (farms.rows.length > 0) {
            const farmId = farms.rows[0].id;
            console.log(`\n--- TRANSACTIONS FOR FARM ${farmId} ---`);
            const txs = await client.query('SELECT * FROM transactions WHERE farm_id = $1 LIMIT 5', [farmId]);
            console.table(txs.rows);
        }

        await client.end();
    } catch (err) {
        console.error('Inspection failed:', err);
    }
}

inspect();
