
const db = require('./db.json');
const sample = require('./data/sample.json');

module.exports = {
    ...db,
    ...sample
}