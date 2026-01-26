
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function check() {
    try {
        await client.connect();
        const res = await client.query('SELECT boundaries FROM farms WHERE id = 19');
        if (res.rows.length > 0) {
            console.log('Boundaries for Farm 19:');
            console.log(JSON.stringify(res.rows[0].boundaries, null, 2));
            console.log('Type of boundaries:', typeof res.rows[0].boundaries);
        } else {
            console.log('Farm 19 not found');
        }
        await client.end();
    } catch (err) {
        console.error(err);
    }
}

check();
