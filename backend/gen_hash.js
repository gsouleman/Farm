
const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync('Hellt0cell', 10);
console.log(hash);
