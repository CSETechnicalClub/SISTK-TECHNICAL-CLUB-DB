const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    rollno: {
      type: String,
      required: [true, "Roll number is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);


const Student = mongoose.model("Student", studentSchema);

module.exports = Student;