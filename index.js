const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo à minha API!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
