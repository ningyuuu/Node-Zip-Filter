const express = require('express');
const http = require('http');
const ws = require('ws');

const port = Number(process.argv[2]) || 8080;
const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });
wss.on('connection', websocket => {
	websocket.on('message', message => {
		console.log('received: %s', message);
	});
});

server.listen(port, () => {
	console.log('Listening on port %d', server.address().port);
});
