const epxress = require('express');
const bodyParser = require('body-parser');
const { writeFile } = require('fs');
const fs = require('fs');

const app = epxress();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/all', (req, res) => {
  const data = require('./data.json');
  res.json(data);
});

app.get('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const data = require('./data.json');
  const item = data.find(item => item.id === id);
  if(item) {
    res.json(item);
  } else {
    res.status(404).json({ message: `找不到id为${ id }的数据` });
  }
});

app.post('/add', (req, res) => {
  console.log(req.body);
  const item = req.body;
  const data = require('./data.json');
  data.push(item);
  writeFile(`./data.json`, JSON.stringify(data, null, 2), { encoding: 'utf-8' }, () => {
    res.json(item);
  });
});

app.delete('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  let data = require('./data.json');
  data = data.filter(item => item.id !== id);
  writeFile(`./data.json`, JSON.stringify(data, null, 2), { encoding: 'utf-8' }, () => {
    res.json(data);
  });
});

app.listen(8080, () => {
  console.log('server created, port is 8080');
});
