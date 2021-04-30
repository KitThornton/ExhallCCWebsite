let express = require('express');
let app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// Routes
let playerRoutes = require('./routes/players');
let battingRoutes = require('./routes/batting');
const createError = require("http-errors");
app.use('/players', playerRoutes);
app.use('/batting', battingRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
