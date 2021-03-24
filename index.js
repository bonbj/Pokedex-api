const express = require("express");
const app = express();
const pokemons = require("./data/pokemon.json");
// const fs = require('fs');

let port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

// const { getColorFromURL } = require('color-thief-node');
// const dominantColor = await getColorFromURL(url);

app.get("/pokemon-list", async (req, res) => {
    res.status(200).send(pokemons);
});

app.listen(port, () => {
    console.log(`Hosted port ${port}`);
});