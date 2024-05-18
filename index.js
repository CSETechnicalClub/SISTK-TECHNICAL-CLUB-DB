const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/student.model.js");
const studentRoute = require("./routes/student.route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/students/", studentRoute);

app.get("/", (req, res) => {
  res.send("Hello from API");
});

// Function to automatically find an available port
const findAvailablePort = (startPort) => {
  const server = app.listen(startPort, () => {
    console.log(`Server is running on port ${startPort}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${startPort} in use, trying ${startPort + 1}`);
      findAvailablePort(startPort + 1);
    } else {
      console.error(err);
    }
  });
};

// Connect to MongoDB and start the server
mongoose
  .connect(
    "mongodb+srv://Admin:96NUfkCt5QHmJ0UP@sistk-db.eiem09u.mongodb.net/?retryWrites=true&w=majority&appName=SISTK-DB"
  )
  .then(() => {
    console.log("Connected to database");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });
