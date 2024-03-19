// import express from 'express';
// import path from "path"
// Créer une application Express
// const app = express();
const express = require("express");
const path = require("path");
// let initial_path = new URL('.', import.meta.url).pathname;
// initial_path = path.join(path.resolve(initial_path), "public");
 let initial_path = path.join(__dirname, "public");

const app = express();

app.use(express.static(initial_path));
app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(initial_path, "index.html"));
// })

app.use((req, res) => {
  res.status(404).json("Not Found.");
});

app.use((req, res) => {
  res.json("404");
});

const ipAdress = "192.168.1.247";
const port = 500;
const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Le serveur tourne aussi sur: http://localhost:${Port} `);

  // browserSync({
  //   proxy: `http://${ipAdress}:${Port}`,
  //   files: ["public/**/*"],
  //   port: Port + 1,
  //   open: false
  // });
});
