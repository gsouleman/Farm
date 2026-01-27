require('dotenv').config();
const db = require('./config/database');

async function runMigration() {
    try {
        console.log('Running migration...');

        await db.query(`
            ALTER TABLE crops 
            ADD COLUMN IF NOT EXISTS expected_harvest VARCHAR(100);
        `);

        console.log('✅ Successfully added expected_harvest column to crops table.');
        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

runMigration();
