const express = require("express");
const path = require("path");
const server = express();

server.use(express.static(__dirname + "/public"));
server.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});