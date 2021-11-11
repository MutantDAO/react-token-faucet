const express = require('express');
const path = require('path');
const app = express();

app.use('/faucet', (req, res, next) => {
	console.info(`req path`, req.path);
	next();
})

app.use('/faucet', express.static(path.join(__dirname, 'build')));

app.get('/faucet', function (req, res) {
	console.info(`req path:`, req.path);
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);