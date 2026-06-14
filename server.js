require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const studentRoutes =
  require("./routes/studentRoutes")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected")
  })
  .catch((err) => {
    console.log("MongoDB Error:", err)
  })

// Home Route
app.get("/", (req, res) => {
  res.send("Attendance Backend Running")
})

// Student Routes
app.use(
  "/api/students",
  studentRoutes
)

// Start Server
const PORT =
  process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})