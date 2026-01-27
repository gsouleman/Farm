require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const db = require('./config/database');

async function runMigration() {
    try {
        console.log('Running migration: Add alert columns to crops...');

        await db.query(`
            ALTER TABLE crops 
            ADD COLUMN IF NOT EXISTS alert_level VARCHAR(10) DEFAULT 'GREEN',
            ADD COLUMN IF NOT EXISTS alert_description TEXT,
            ADD COLUMN IF NOT EXISTS has_contingency BOOLEAN DEFAULT FALSE;
        `);

        console.log('✅ Migration successful: Added alert_level, alert_description, and has_contingency to crops table.');
        process.exit(0);
    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    }
}

runMigration();
