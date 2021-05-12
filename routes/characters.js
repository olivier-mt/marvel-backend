require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    // ajouter pagination
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );

    const resultTab = response.data.results;

    res.status(200).json({ sorted: resultTab });
  } catch (error) {
    console.log(error.message);
    res.status(400).json("an error occured");
  }
});

module.exports = router;
