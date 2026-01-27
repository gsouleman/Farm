const db = require('../config/database');
require('dotenv').config({ path: '../.env' });

async function migrate() {
    try {
        console.log('Connected to database...');

        // Create crop_types table
        await db.query(`
            CREATE TABLE IF NOT EXISTS crop_types (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                category VARCHAR(20) NOT NULL CHECK (category IN ('fruit', 'cash')),
                name VARCHAR(100) NOT NULL,
                is_default BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT NOW()
            );
        `);

        console.log('✅ Successfully created crop_types table.');

        // Seed default types
        // We will do this dynamically in the API or app, but creating a constraint
        // to prevent duplicate names per user/category is good.
        await db.query(`
            CREATE UNIQUE INDEX IF NOT EXISTS idx_crop_types_user_category_name 
            ON crop_types(user_id, category, name);
        `);
        console.log('✅ Created unique index for crop types.');

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
