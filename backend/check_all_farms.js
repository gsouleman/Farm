
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function check() {
    try {
        await client.connect();
        const res = await client.query('SELECT id, name, user_id, boundaries FROM farms');
        res.rows.forEach(r => {
            let b = r.boundaries;
            let count = 'NULL';
            if (b) {
                if (typeof b === 'string') {
                    try { b = JSON.parse(b); } catch (e) { }
                }
                count = Array.isArray(b) ? b.length : 'NOT_ARRAY';
            }
            console.log(`Farm ${r.id} (${r.name}, Owner ${r.user_id}): ${count} points`);
        });
        await client.end();
    } catch (err) {
        console.error(err);
    }
}

check();
