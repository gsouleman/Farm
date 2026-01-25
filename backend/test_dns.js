
const dns = require('dns');
const { Client } = require('pg');

const hostname = 'ep-noisy-cell-a4rcfopc-pooler.us-east-1.aws.neon.tech';

console.log(`Resolving ${hostname}...`);

dns.lookup(hostname, { family: 4 }, (err, address, family) => {
    if (err) {
        console.error('DNS Lookup failed:', err);
        return;
    }
    console.log(`Resolved to IPv4: ${address}`);

    const config = {
        host: address, // Connect to IP directly
        user: 'neondb_owner',
        password: 'npg_9geBaToXCs1v',
        database: 'farm',
        port: 5432,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 10000
    };

    console.log('Testing connection to IP...');
    const client = new Client(config);

    client.connect()
        .then(() => {
            console.log('Connected successfully!');
            return client.query('SELECT NOW()');
        })
        .then(res => {
            console.log('Query result:', res.rows[0]);
            return client.end();
        })
        .catch(err => {
            console.error('Connection failed:', err);
        });
});
