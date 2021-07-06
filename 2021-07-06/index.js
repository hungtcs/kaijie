const http = require('http');

/**
 *
 * @param {*} req
 * @param {import('http').ServerResponse} res
 */
function getAll(req, res) {
  const data = require('./data.json');
  res.setHeader('content-type', 'text/json; charset=UTF-8');
  res.end(JSON.stringify(data));
}

/**
 *
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
function getById(req, res) {
  const url = req.url;
  const id = Number.parseInt(url.replace('/', ''));
  const data = require('./data.json');
  const item = data.find(item => item.id === id);
  res.setHeader('content-type', 'text/json; charset=UTF-8');
  if(item) {
    res.end(JSON.stringify(item));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: `找不到id为${ id }的数据` }));
  }
}

const server = http.createServer(
  (req, res) => {
    const url = req.url;
    console.log({ url });
    if(req.method.toUpperCase() === 'GET' && url === '/') {
      getAll(req, res);
    } else if(req.method.toUpperCase() === 'GET' && new RegExp("^/[0-9]+$").test(url)) {
      getById(req, res);
    }
  },
);

server.listen(8080, () => {
  console.log('server created, port is 8080');
});
