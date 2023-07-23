const fs = require('fs');
const jsonServer = require('json-server');
const server = jsonServer.create();
server.use(jsonServer.defaults());
const sample = JSON.parse(fs.readFileSync('./data/sample.json', 'utf-8'));

server.get('/api/sample', (req, res) => {
    res.status(200).json(sample)
});

server.listen(3001, () => {
    console.log('Run Auth API Server');
});