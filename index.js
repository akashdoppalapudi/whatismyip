import express from 'express';

const app = express();
const port = 3000;

app.set('trust proxy', true);

app.get('/', (req, res) => {
	res.send(res.socket.remoteAddress);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
