const { Client } = require('pg');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

async function migrate() {
    try {
        await client.connect();
        console.log('✅ Connected to database');

        console.log('Updating decimal precision for area fields...');

        // Update farms table
        await client.query(`
            ALTER TABLE farms 
            ALTER COLUMN area TYPE DECIMAL(12,4),
            ALTER COLUMN perimeter TYPE DECIMAL(12,4);
        `);
        console.log('✅ Updated farms table');

        // Update crops table
        await client.query(`
            ALTER TABLE crops 
            ALTER COLUMN area TYPE DECIMAL(12,4);
        `);
        console.log('✅ Updated crops table');

        // Update sections table
        await client.query(`
            ALTER TABLE sections 
            ALTER COLUMN area TYPE DECIMAL(12,4);
        `);
        console.log('✅ Updated sections table');

        console.log('✅ All precision updates completed.');

    } catch (error) {
        console.error('Migration error:', error);
    } finally {
        await client.end();
    }
}

migrate();
