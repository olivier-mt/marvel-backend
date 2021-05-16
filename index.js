require("dotenv").config();
const express = require("express");
const app = express();
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
const formidable = require("express-formidable");
const { all } = require("./routes/characters");
app.use(formidable());
const cors = require("cors");
app.use(cors());
app.use(charactersRoutes);
app.use(comicsRoutes);

/*app.all("*", (req, res) => {
  console.log("This route does not exists");
});*/

app.listen(process.env.PORT, (req, res) => {
  console.log("Server is started");
});
