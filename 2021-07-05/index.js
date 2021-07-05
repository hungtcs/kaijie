const fs = require('fs');
const http = require('http');
const nunjucks = require('nunjucks');

function getData() {
  return require('./data.json');
}

// request   请求
// response  响应
// Model View

const server = http.createServer(
  (req, res) => {
    console.log(`REQ: ${ req.url }`);
    if(req.url === '/') {
      const data = getData();

      const template = fs.readFileSync('./index.njk', { encoding: 'utf-8' });
      const html = nunjucks.renderString(template, { data });

      res.setHeader('Content-Type', 'text/html');

      res.end(html);
    } if(req.url === '/2') {
      const data = getData();

      const template = fs.readFileSync('./index2.njk', { encoding: 'utf-8' });
      const html = nunjucks.renderString(template, { data });

      res.setHeader('Content-Type', 'text/html');

      res.end(html);
    } if(req.url === '/3') {
      const data = getData();

      const template = fs.readFileSync('./index3.njk', { encoding: 'utf-8' });
      const html = nunjucks.renderString(template, { data });

      res.setHeader('Content-Type', 'text/html');

      res.end(html);
    } else if(req.url === '/data') {
      const data = fs.readFileSync('./data.json', { encoding: 'utf-8' });
      res.setHeader('Content-Type', 'text/json');
      res.end(data);
    }
  },
);

server.listen(8080);
