const express = require("express");
const cors = require("cors");
const session = require("express-session");
const options = require("./session");
const passport = require("passport");

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(session(options));
  app.use(passport.initialize());
  app.use(passport.session());
};
