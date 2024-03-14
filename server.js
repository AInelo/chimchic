const express = require("express");
const path = require("path");

let initial_path = path.join(__dirname, "public");

const app = express();

app.use(express.static(initial_path));

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
const port = 5000;
const Port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Le serveur tourne aussi sur: http://localhost:${port} `);

  // browserSync({
  //   proxy: `http://${ipAdress}:${Port}`,
  //   files: ["public/**/*"],
  //   port: Port + 1,
  //   open: false
  // });
});
