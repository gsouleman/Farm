
const { Client } = require('pg');

// Guessing direct hostname by removing '-pooler'
const directHost = 'ep-noisy-cell-a4rcfopc.us-east-1.aws.neon.tech';

const config = {
    host: directHost,
    user: 'neondb_owner',
    password: 'npg_9geBaToXCs1v',
    database: 'farm',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
    connectionTimeoutMillis: 10000
};

console.log('Testing V4 (Direct) with host:', directHost);

const client = new Client(config);

async function test() {
    try {
        console.log('Connecting...');
        await client.connect();
        console.log('Connected successfully!');
        const res = await client.query('SELECT NOW()');
        console.log('Query result:', res.rows[0]);
        await client.end();
    } catch (err) {
        console.error('Connection failed:', err);
    }
}

test();
