import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(201, " OK", { "Content-Type": "text/html" });
    res.write("<h1>Home</h1>");
  } else if (req.url === "/about") {
    res.writeHead(201, "OK", { "Content-Type": "text/html" });
    res.write("<h1>About</h1>");
  } else if (req.url == "/contact") {
    res.writeHead(201, "OK", { "Content-Type": "text/html" });
    res.write("<h1>Contact</h1>");
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.write("<h1>404 Page NOT Found</h1>");
  }
});

server.listen(8000, () => console.log("Server Listening on port 8000"));
