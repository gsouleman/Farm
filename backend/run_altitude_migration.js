require('dotenv').config();
const db = require('./config/database');

async function runMigration() {
    try {
        console.log('Running altitude migration...');

        await db.query(`
            ALTER TABLE farms 
            ADD COLUMN IF NOT EXISTS altitude NUMERIC DEFAULT 1000;
        `);

        // Set default values for existing farms to 1000m (middle ground)
        await db.query(`
            UPDATE farms SET altitude = 1000 WHERE altitude IS NULL;
        `);

        console.log('✅ Successfully added altitude column to farms table and updated existing records.');
        process.exit(0);
    } catch (err) {
        if (err.message.includes('already exists')) {
            console.log('Column already exists, migration skipped.');
            process.exit(0);
        }
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

runMigration();
