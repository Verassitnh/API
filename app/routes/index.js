const noteRoutes = require('./user_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  app.post('/users', (req, res) => {
    console.log(req.body)
    res.send('Hello')
  });
};