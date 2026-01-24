const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Database connection string from user
const connectionString = 'postgresql://neondb_owner:npg_9geBaToXCs1v@ep-noisy-cell-a4rcfopc-pooler.us-east-1.aws.neon.tech/farm?sslmode=require&channel_binding=require';

async function initDatabase() {
    const client = new Client({
        connectionString: connectionString,
    });

    try {
        await client.connect();
        console.log('Connected to Neon database successfully.');

        const schemaPath = path.join(__dirname, 'schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        console.log('Executing schema.sql...');
        await client.query(schemaSql);

        console.log('✅ Database schema initialized successfully!');

        // Optional: Verify tables
        const res = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);

        console.log('Created tables:', res.rows.map(r => r.table_name).join(', '));

    } catch (err) {
        console.error('❌ Error initializing database:', err);
    } finally {
        await client.end();
    }
}

initDatabase();
