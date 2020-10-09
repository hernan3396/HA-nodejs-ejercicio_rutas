const http = require("http");
const routes = require("./routes.js");

console.log(routes);

const server = http.createServer((req, res) => {
  if (req.url == routes.home) {
    res.end("home");
  }
  if (req.url == routes.productos) {
    res.end("productos");
  }
  if (req.url == routes.contactos) {
    res.end("contactos");
  }
});

server.listen(8000, () => {
  console.log("escuchando en http://localhost:8000");
});
