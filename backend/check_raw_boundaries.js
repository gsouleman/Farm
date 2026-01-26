
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function check() {
    try {
        await client.connect();
        const res = await client.query('SELECT id, name, boundaries FROM farms WHERE id = 19');
        if (res.rows.length > 0) {
            console.log('--- Farm 19 Raw Data ---');
            console.log('ID:', res.rows[0].id);
            console.log('Name:', res.rows[0].name);
            console.log('Boundaries:', res.rows[0].boundaries);
            console.log('Type of boundaries:', typeof res.rows[0].boundaries);
            if (res.rows[0].boundaries && Array.isArray(res.rows[0].boundaries)) {
                console.log('Is Array: Yes');
                console.log('Length:', res.rows[0].boundaries.length);
            } else {
                console.log('Is Array: No');
            }
        } else {
            console.log('Farm 19 not found');
        }
        await client.end();
    } catch (err) {
        console.error(err);
    }
}

check();
