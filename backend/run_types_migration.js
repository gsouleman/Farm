require('dotenv').config();
const db = require('./config/database');

async function runMigration() {
    try {
        console.log('Running migration for crop_types...');

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

        // Unique index
        await db.query(`
            CREATE UNIQUE INDEX IF NOT EXISTS idx_crop_types_user_category_name 
            ON crop_types(user_id, category, name);
        `);
        console.log('✅ Created unique index.');

        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

runMigration();
