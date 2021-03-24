const express = require("express");
const app = express();
const pokemons = require("./data/pokemon.json");
// const fs = require('fs');

let port = process.env.PORT || 3000;

// const { getColorFromURL } = require('color-thief-node');
// const dominantColor = await getColorFromURL(url);

app.get("/pokemon-list", async (req, res) => {
    res.status(200).send(pokemons);
});

app.listen(port, () => {
    console.log(`Hosted port ${port}`);
});