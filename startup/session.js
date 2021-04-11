const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const { MONGO_URI, SESSION_SECRET } = require("./keys");

const store = new MongoDBStore({
  uri: MONGO_URI,
  collection: "authSession",
});

const options = {
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // define the session for 1 week
  },
  resave: false,
  saveUninitialized: false,
  store: store,
};

module.exports = options;
