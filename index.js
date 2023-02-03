const express = require("express");
const app = express();

// Endpoint / -> Hello World
app.get("/", function (req, res) {
  res.send("Hello, World!");
});

// Endpoint /oi -> Olá Mundo
app.get("/oi", function (req, res) {
  res.send("Olá, Mundo!");
});

// Lista de Informações
const itens = ["Margarita", "Cosmopolitan", "Tequila Sunrise"];

// CRUD -> Lista de Informações

// Endpoint Read All -> [GET] /item
app.get("/item", function (req, res) {
  res.send(itens);
});

app.listen(3000);
