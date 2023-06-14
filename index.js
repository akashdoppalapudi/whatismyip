const express = require('express');

const app = express();
const port = 3000;

app.set('trust proxy', true);

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'text/plain');
	res.status(200).send(`${req.ip}\n`);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
