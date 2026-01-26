
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
            const boundaries = res.rows[0].boundaries;
            console.log('--- Deep Validate Farm 19 ---');
            if (Array.isArray(boundaries)) {
                console.log(`Total Points: ${boundaries.length}`);
                let invalidCount = 0;
                boundaries.forEach((p, i) => {
                    if (typeof p.lat !== 'number' || typeof p.lng !== 'number') {
                        console.log(`Point ${i} INVALID:`, p);
                        invalidCount++;
                    }
                });
                if (invalidCount === 0) console.log('All points have valid numeric lat/lng.');
                else console.log(`Found ${invalidCount} invalid points.`);
            } else {
                console.log('Boundaries is NOT an array:', typeof boundaries);
            }
        }
        await client.end();
    } catch (err) {
        console.error(err);
    }
}

check();
