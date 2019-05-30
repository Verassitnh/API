module.exports = function(app) {
	app.post('/users', (req, res) => {
		console.log(req.body)
		res.send('User Made')
	  });
};