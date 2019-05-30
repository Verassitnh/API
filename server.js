const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));










app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send('hey')
  });
