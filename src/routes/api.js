const express = require("express");
const userController = require("../controllers/userController.js");
const experienceController = require("../controllers/experienceController.js");
const middleware = require("../middlewares/authVerification.js");

let router = express.Router();

// Register a new user

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user", middleware, userController.user);
router.get("/logout", middleware, userController.logout);
router.put("/user-update", middleware, userController.userUpdate);

// Experience
router.post("/create-experience", experienceController.createExperience);
router.get("/all-experience", experienceController.allExperience);
router.get("/single-experience/:id", experienceController.singleExperience);
router.put("/update-experience/:id", experienceController.updateExperience);
router.delete("/delete-experience/:id", experienceController.deleteExperience);

module.exports = router;
