require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const app = express();
const cors = require("cors");

router.get("/characters", async (req, res) => {
  try {
    // ajouter pagination

    const { limit, skip, name } = req.query;

    //const theLimit = limit || 100;
    const theSkip = skip || 0;
    const theName = name && `&name=${name}`;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&limit=5&skip=${theSkip}&${theName}`
    );

    const resultTab = response.data;
    console.log("count", resultTab.count);
    console.log("skip", skip, theSkip);

    res.status(200).json(resultTab);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("an error occured");
  }
});

module.exports = router;
