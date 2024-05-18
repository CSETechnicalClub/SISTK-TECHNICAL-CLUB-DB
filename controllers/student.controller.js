const Student = require("../models/student.model");

const getStudents = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const rollno = req.params.rollno;
    const student = await Student.findOne({ rollno });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
    try {
        const rollno = req.params.rollno;
        const student = await Student.findOneAndUpdate({ rollno }, req.body, {
          new: true,
        });
        if (!student) {
          return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ student });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};


module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent
};