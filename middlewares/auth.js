const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("unauthorized");
  }

  next();
};

// Also, You can create isAdmin middleware
const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(401).send("unauthorized");
  }

  next();
};

module.exports = {
  isAuth,
  isAdmin,
};
