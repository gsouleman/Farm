const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { pool } = require('./config/database');

async function checkTable() {
    try {
        console.log('Checking incidents table...');
        const res = await pool.query("SELECT to_regclass('public.incidents')");
        if (res.rows[0].to_regclass) {
            console.log('✅ Table "incidents" EXISTS.');

            // Check row count
            const count = await pool.query('SELECT COUNT(*) FROM incidents');
            console.log(`✅ Table row count: ${count.rows[0].count}`);
        } else {
            console.error('❌ Table "incidents" DOES NOT EXIST.');
        }
    } catch (err) {
        console.error('Error checking table:', err);
    } finally {
        pool.end();
    }
}

checkTable();
