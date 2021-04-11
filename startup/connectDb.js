const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Connection events
mongoose.connection.on("connected", () => {
  console.log("MongoDb connected");
});

mongoose.connection.on("error", (err) => {
  console.log("error" + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Close connection");
    process.exit(0);
  });
});
