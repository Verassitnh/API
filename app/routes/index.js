const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  app.post('/users', (req, res) => {
    // You'll create your note here.
    res.send('Hello')
  });
};