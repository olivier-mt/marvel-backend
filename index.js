require("dotenv").config();
const express = require("express");
const app = express();
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
const formidable = require("express-formidable");
const { all } = require("./routes/characters");
app.use(formidable());

app.use(charactersRoutes);
app.use(comicsRoutes);
const cors = require("cors");
app.use(cors());
/*app.all("*", (req, res) => {
  console.log("This route does not exists");
});*/

app.listen(3001, (req, res) => {
  console.log("Server is started");
});
