const express = require("express");
const userController = require("../controllers/userController.js");
const experienceController = require("../controllers/experienceController.js");
const educationController = require("../controllers/educationController.js");
const advantageController = require("../controllers/advantageController.js");
const middleware = require("../middlewares/authVerification.js");

let router = express.Router();

// Register a new user

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user", middleware, userController.user);
router.get("/logout", middleware, userController.logout);
router.put("/user-update", middleware, userController.userUpdate);

// Experience
router.post(
  "/create-experience",
  middleware,
  experienceController.createExperience
);
router.get("/all-experience", experienceController.allExperience);
router.get("/single-experience/:id", experienceController.singleExperience);
router.put(
  "/update-experience/:id",
  middleware,
  experienceController.updateExperience
);
router.delete(
  "/delete-experience/:id",
  middleware,
  experienceController.deleteExperience
);

// Education
router.post(
  "/create-education",
  middleware,
  educationController.createEducation
);
router.get("/all-education", educationController.allEducation);
router.get("/single-education/:id", educationController.singleEducation);
router.put(
  "/update-education/:id",
  middleware,
  educationController.updateEducation
);
router.delete(
  "/delete-education/:id",
  middleware,
  educationController.deleteEducation
);

// Advantage

router.post(
  "/create-advantage",
  middleware,
  advantageController.createAdvantage
);
router.get("/all-advantage", advantageController.allAdvantage);
router.get("/single-advantage/:id", advantageController.singleAdvantage);
router.put(
  "/update-advantage/:id",
  middleware,
  advantageController.updateAdvantage
);
router.delete(
  "/delete-advantage/:id",
  middleware,
  advantageController.deleteAdvantage
);

module.exports = router;
