const http = require('http');
const seneca = require('seneca')();

seneca.add({ role: 'math', cmd: 'sum' }, function(msg, respond) {
  var sum = msg.left + msg.right;
  respond(null, { answer: sum });
});
seneca.add({ role: 'math', cmd: 'product' }, function(msg, respond) {
  var product = msg.left * msg.right;
  respond(null, { answer: product });
});
seneca.act({ role: 'math', cmd: 'sum', left: 1, right: 2 }, console.log);
seneca.act({ role: 'math', cmd: 'product', left: 3, right: 4 }, console.log);

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
});
server.listen(8000);
