
const db = require('./backend/config/database');
async function test() {
    try {
        const res = await db.query("SELECT * FROM information_schema.columns WHERE table_name = 'farms'");
        if (res.rows.length === 0) {
            console.log("No columns found or table doesn't exist.");
        } else {
            console.table(res.rows.map(r => ({ column: r.column_name, type: r.data_type })));
        }
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
test();
