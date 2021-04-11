module.exports = (app) => {
  app.use("/api/v1/auth", require("../routes/users"));
};
