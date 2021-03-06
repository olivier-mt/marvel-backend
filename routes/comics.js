require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");

const { response } = require("express");

router.get("/comics/:characterId", async (req, res) => {
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
    const { limit, skip, title } = req.query;

    const theSkip = skip || 0;
    const theTitle = title && `title=${title}`;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&skip=${theSkip}&limit=5&${theTitle}`
    );

    const result = response.data;
    console.log("ok");

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("an error occured");
  }
});

module.exports = router;
