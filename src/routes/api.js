const express = require("express");
const userController = require("../controllers/userController");
const middleware = require("../middlewares/authVerification.js")

let router = express.Router();

// Register a new user

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get('/user', middleware, userController.user);
router.get('/logout', middleware, userController.logout);
router.put('/user-update', middleware, userController.userUpdate);


module.exports = router;
