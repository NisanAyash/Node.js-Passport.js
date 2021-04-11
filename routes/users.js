const router = require("express").Router();
const passport = require("../utils/passport");
const users = require("../controllers/users-controller");
const { isAuth, isAdmin } = require("../middlewares/auth");

router
  .post("/register", users.register)
  .post("/login", passport.authenticate("local"), users.login)
  .get("/profile", [isAuth], users.profile)
  .get("/admin", [isAuth, isAdmin], users.secret)
  .get("/logout", users.logout);

module.exports = router;
