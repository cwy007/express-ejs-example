var express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', {data: 'Welcome'});
});

app.listen(8080, () => {
  console.log('Listing on port 8080');
});
