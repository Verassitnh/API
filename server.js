const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs')


app.use(bodyParser.urlencoded({ extended: true }));








if (PORT) {
	const port = PORT
	module.exports.port = port
} else {
	const port = 8000;
	module.exports.port = port
}

app.listen(module.exports.port, () => {
	console.log('We are live on ' + port);
});

app.post('/users', (req, res) => {
	const username = req.body.username

	fs.writeFileSync(`./users/${username}.json`, JSON.stringify(req.body), 'utf-8')
	res.send(JSON.stringify(req.body))
});

app.get('/users/:id', (req, res) => {

	const data = fs.readFileSync(`./users/${req.params.username}.json`)
	res.send(data)
})


app.put('/users/:id', (req, res) => {

	fs.writeFileSync(`./users/${req.params.username}.json`, JSON.stringify(req.body))
	const data = fs.readFileSync(`./users/${req.params.username}.json`)
	res.send(data)
})


app.delete('/users/:username', (req, res) => {

	const data = fs.readFileSync(`./users/${req.params.username}.json`)
	fs.unlinkSync(`./users/${req.params.username}.json`)
	
	res.send(data)
})	