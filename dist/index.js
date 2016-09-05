'use strict';

const express = require('express');

const app = express();

app.get('/healthcheck', (req, res, next) => {
  return res.status(200).json({
    healthy: true
  });
});

process.env.PORT = process.env.PORT || 3000;
app.listen(process.env.PORT);