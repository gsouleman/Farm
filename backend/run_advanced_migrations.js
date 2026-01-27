require('dotenv').config();
const db = require('./config/database');
const fs = require('fs');
const path = require('path');

async function runMigration() {
    try {
        console.log('Running migration for Advanced Features tables...');
        const sqlPath = path.join(__dirname, 'migrations', '002_create_advanced_tables.sql');
        const sql = fs.readFileSync(sqlPath, 'utf8');

        await db.query(sql);

        console.log('✅ Successfully created Advanced Features tables.');
        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

runMigration();
