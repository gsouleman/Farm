const { Client } = require('pg');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config({ path: path.join(__dirname, '../.env') });

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

async function migrate() {
    try {
        await client.connect();
        console.log('✅ Connected to database');

        // Read schema file
        // const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');

        // Since we are migrating, we can't just run schema.sql if tables exist. 
        // We need to ALTER tables.

        console.log('Migrating users table...');

        // Add role column if not exists
        await client.query(`
            DO $$ 
            BEGIN 
                IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='users' AND column_name='role') THEN 
                    ALTER TABLE users ADD COLUMN role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('admin', 'user', 'guest')); 
                END IF; 
            END $$;
        `);

        // Add must_change_password column if not exists
        await client.query(`
            DO $$ 
            BEGIN 
                IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='users' AND column_name='must_change_password') THEN 
                    ALTER TABLE users ADD COLUMN must_change_password BOOLEAN DEFAULT TRUE; 
                END IF; 
            END $$;
        `);

        console.log('✅ Schema migration completed.');

    } catch (error) {
        console.error('Migration error:', error);
    } finally {
        await client.end();
    }
}

migrate();
