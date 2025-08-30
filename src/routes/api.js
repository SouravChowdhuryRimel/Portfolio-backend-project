const express = require("express");
const userController = require("../controllers/userController.js");
const experienceController = require("../controllers/experienceController.js");
const educationController = require("../controllers/educationController.js");
const advantageController = require("../controllers/advantageController.js");
const portfolioController = require("../controllers/portfolioController.js");
const serviceController = require("../controllers/serviceController.js");
const testimonialController = require("../controllers/testimonialController.js");
const contactController = require("../controllers/contactController.js");
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

// Portfolio
router.post(
  "/create-portfolio",
  middleware,
  portfolioController.createPortfolio
);
router.get("/all-portfolio", portfolioController.allPortfolio);
router.get("/single-portfolio/:id", portfolioController.singlePortfolio);
router.put(
  "/update-portfolio/:id",
  middleware,
  portfolioController.updatePortfolio
);
router.delete(
  "/delete-portfolio/:id",
  middleware,
  portfolioController.deletePortfolio
);

// Service
router.post("/create-service", middleware, serviceController.createService);
router.get("/all-service", serviceController.allService);
router.get("/single-service/:id", serviceController.singleService);
router.put("/update-service/:id", middleware, serviceController.updateService);
router.delete(
  "/delete-service/:id",
  middleware,
  serviceController.deleteService
);

// Testimonial
router.post("/create-testimonial", middleware, testimonialController.createTestimonial);
router.get("/all-testimonial", testimonialController.allTestimonial);
router.get("/single-testimonial/:id", testimonialController.singleTestimonial);
router.put(
  "/update-testimonial/:id",
  middleware,
  testimonialController.updateTestimonial
);
router.delete(
  "/delete-testimonial/:id",
  middleware,
  testimonialController.deleteTestimonial
);

// Contact
router.post("/create-contact", contactController.createContact);
router.get("/all-contact", contactController.allContact);
router.get("/single-contact/:id", contactController.singleContact);
router.delete(
  "/delete-contact/:id",
  middleware,
  contactController.deleteContact
);


module.exports = router;
