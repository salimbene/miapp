'use strict';

const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use('/', async (req, res) => {
  const apiSettings = {
    method: 'get',
    url: 'https://thesimpsonsquoteapi.glitch.me/quotes',
  };

  const { data } = await axios(apiSettings);
  const { quote, character } = data[0];

  return res.status(200).send(`"${quote}" - ${character}`);
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.info(`STATUS: Running at http://localhost:${PORT}...`);
});

module.exports = server;
