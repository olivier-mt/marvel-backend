require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(cors());

const { response } = require("express");

router.get("/comics/:characterId", cors(), async (req, res) => {
  try {
    const { characterId } = req.params;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );

    const result = response.data;

    res.status(200).json({ result });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );

    const resultTab = response.data.results;

    console.log(resultTab);

    res.status(200).json(resultTab);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("an error occured");
  }
});

module.exports = router;
