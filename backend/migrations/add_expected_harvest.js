const db = require('../config/database');
require('dotenv').config({ path: '../.env' });

async function migrate() {
    try {
        console.log('Connected to database...');

        // Add expected_harvest column if not exists
        await db.query(`
            ALTER TABLE crops 
            ADD COLUMN IF NOT EXISTS expected_harvest VARCHAR(100);
        `);

        console.log('✅ Successfully added expected_harvest column to crops table.');
    } catch (err) {
        console.error('Migration failed:', err);
    } finally {
        // Pool doesn't need explicit close usually but for a script it's good practice if accessible
        // But db module exposes query and pool. 
        if (db.pool) {
            await db.pool.end();
        } else {
            process.exit(0);
        }
    }
}

migrate();
