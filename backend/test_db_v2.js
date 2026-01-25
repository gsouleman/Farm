
const { Client } = require('pg');

const config = {
    host: 'ep-noisy-cell-a4rcfopc-pooler.us-east-1.aws.neon.tech',
    user: 'neondb_owner',
    password: 'npg_9geBaToXCs1v',
    database: 'farm',
    port: 5432,
    ssl: true, // Default SSL
    connectionTimeoutMillis: 5000 // Fail fast
};

console.log('Testing V2 with config:', { ...config, password: '****' });

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
