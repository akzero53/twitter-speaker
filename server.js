const cwd = process.cwd();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3456;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set('views', cwd + '/view');

app.use('/', express.static(cwd + '/public'));
app.get('/', (_, res) => res.render('index'));

app.listen(port, () => console.log('listening:' + port));
