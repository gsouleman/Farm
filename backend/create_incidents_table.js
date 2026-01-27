const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { pool } = require('./config/database');

console.log('Script started...');
if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is NOT defined in script env!');
} else {
    console.log('✅ DATABASE_URL found.');
}


const createTableQuery = `
  CREATE TABLE IF NOT EXISTS incidents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farm_id INTEGER NOT NULL REFERENCES farms(id) ON DELETE CASCADE,
    category VARCHAR(50) NOT NULL,
    subcategory VARCHAR(100),
    severity VARCHAR(20) CHECK (severity IN ('Low', 'Medium', 'High', 'Critical')),
    date_detected DATE NOT NULL,
    date_resolved DATE,
    affected_assets TEXT,
    financial_impact NUMERIC DEFAULT 0,
    status VARCHAR(20) DEFAULT 'Open' CHECK (status IN ('Open', 'In Progress', 'Resolved')),
    details JSONB DEFAULT '{}',
    attachment_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
`;

const createIndexQuery = `
  CREATE INDEX IF NOT EXISTS idx_incidents_farm_id ON incidents(farm_id);
`;

async function createTable() {
    try {
        console.log('Creating incidents table...');
        await pool.query(createTableQuery);
        console.log('Incidents table created successfully.');

        console.log('Creating index on farm_id...');
        await pool.query(createIndexQuery);
        console.log('Index created successfully.');
    } catch (err) {
        console.error('Error creating table:', err);
    } finally {
        pool.end();
    }
}

createTable();
