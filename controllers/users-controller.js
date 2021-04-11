const User = require("../models/User");

exports.register = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;

  if (!email || !password || !first_name || !last_name) {
    res.status(401).send("Some fileds are missing!");
  }

  // ******* validate the request fileds... *******

  const user = new User({
    email,
    password,
    first_name,
    last_name,
  });

  await user.save();

  res.status(201).send("A new user created!");
};

exports.login = (req, res) => {
  console.log(req.user);
  res.status(200).send("Login Seccessfuly!");
};

exports.profile = (req, res) => {
  res.status(200).json({ user: req.user, auth: req.isAuthenticated() });
};

exports.secret = (req, res) => {
  console.log(req.isAuthenticated());
  res.status(200).send("Is Admin");
};

exports.logout = (req, res) => {
  req.logOut();
  res.send("The user logged out successfully");
};
