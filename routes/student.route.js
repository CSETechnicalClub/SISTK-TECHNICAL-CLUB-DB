const express = require("express");
const Student = require("../models/student.model");
const router = express.Router();
const { getStudent, getStudents, createStudent, updateStudent } = require("../controllers/student.controller.js");  

router.get("/", getStudents);
router.get("/:rollno", getStudent);
router.post("/", createStudent);
router.put("/:rollno", updateStudent);

module.exports = router;