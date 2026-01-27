const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const db = require('../config/database');

async function migrate() {
    try {
        console.log('Connected to database...');

        // Create farm_analysis table
        await db.query(`
            CREATE TABLE IF NOT EXISTS farm_analysis (
                id SERIAL PRIMARY KEY,
                farm_id INTEGER UNIQUE REFERENCES farms(id) ON DELETE CASCADE,
                data JSONB NOT NULL,
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            );
        `);

        console.log('✅ Successfully created farm_analysis table.');

    } catch (err) {
        console.error('Migration failed:', err);
    } finally {
        if (db.pool) {
            await db.pool.end();
        } else {
            process.exit(0);
        }
    }
}

migrate();
