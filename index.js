const http = require("http");

http
  .createServer((req, res) => {
    //! basic
    // res.write("hello I am from backend");

    //!send html
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>hello I am from</h1>");
    res.end();
  })
  .listen(4500);
