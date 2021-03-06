const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

require("./startup/connectDb");
require("./startup/parser")(app);
require("./startup/routes")(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, console.log(`App listening at http://localhost:${port}`));
