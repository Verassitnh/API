const userRoutes = require('./user_routes');
module.exports = function(app, db) {
  userRoutes(app, db);
  app.post('/users', (req, res) => {
    console.log(req.body)
    res.send(req.body)
  });
};