const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

require('./app/routes/index')(app, {});
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
