require("dotenv").config();
const express = require("express");
const app = express();
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
const formidable = require("express-formidable");
app.use(formidable());
app.use(charactersRoutes);
app.use(comicsRoutes);

app.listen(3000, (req, res) => {
  console.log("Server is started");
});
