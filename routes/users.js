var express = require("express");
const {
  loginUser,
  signupUser,
  getAllUsers,
} = require("../controller/userController");
var router = express.Router();

/* GET users listing. */
router.post("/", loginUser);

router.post("/signup", signupUser);

router.get("/", getAllUsers);

module.exports = router;
