const express = require("express");
const app = express();

// Endpoint / -> Hello World
app.get("/", function (req, res) {
  res.send("Este é meu site, gostou né?");
});

// Endpoint /oi -> Olá Mundo
app.get("/oi", function (req, res) {
  res.send("Olá, Mundo!");
});

app.listen(3000);
