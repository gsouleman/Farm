require('dotenv').config();
const db = require('./config/database');

async function checkSchema() {
    try {
        const res = await db.query(`
            SELECT table_name, column_name, data_type 
            FROM information_schema.columns 
            WHERE (table_name = 'farms' OR table_name = 'incidents') 
            AND column_name = 'id';
        `);
        console.table(res.rows);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
checkSchema();
