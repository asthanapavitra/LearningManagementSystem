const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const facultyController = require("../controllers/facultyController");
const { isLoggedInFaculty } = require("../middlewares/isLoggedInFaculty");
const { isLoggedInAdmin } = require("../middlewares/isLoggedInAdmin");
const { MongoClient, GridFSBucket } = require('mongodb');
const mongoose = require('mongoose');
const upload = require('../config/multer-config'); 

router.get("/", (req, res) => {
  return res.status(200).send("Hello from faculty router");
});

router.post(
  "/create-faculty",
  isLoggedInAdmin,
  [
    body("fullName.firstName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("First name must contain at least 3 characters"),
    body("fullName.lastName").trim().optional(),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Invalid email format")
      .matches(/@igdtuw\.ac\.in$/)
      .withMessage("Email must be from @igdtuw.ac.in domain"),
    body("facultyId").trim().notEmpty().withMessage("Faculty ID is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("department")
      .isIn(["CSE", "IT", "ECE", "MAE", "CSE-AI", "AI-ML", "ECE-AI"])
      .withMessage("Invalid Department"),
  ],
  facultyController.registerFaculty
);
router.post(
  "/login",
  [
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
    body("facultyId")
      .isLength({ min: 6 })
      .withMessage("Enrollment number must be atleast 6 characters long"),
  ],
  facultyController.loginFaculty
);

router.get("/dashboard", isLoggedInFaculty, (req, res) => {
  res.status(201).json({ faculty: req.faculty });
});
router.get("/logout", isLoggedInFaculty, (req, res) => {
  res.clearCookie("facultyToken");
  res.status(200).json({ msg: "Logged out successfully" });
});
module.exports=router
