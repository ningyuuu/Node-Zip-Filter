const express = require('express');
const http = require('http');
const ws = require('ws');
const filterZip = require('./filterZip.js');

const port = Number(process.argv[2]) || 8080;
const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });
wss.on('connection', websocket => {
	websocket.on('zipFile', (file, data) => {
		console.log('received zip file %s', data.name);
		const filteredZip = filterZip(file);
		// storeZip(filteredZip);
	});
});

server.listen(port, () => {
	console.log('Listening on port %d', server.address().port);
});
