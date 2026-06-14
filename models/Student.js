const mongoose =
  require("mongoose")

const studentSchema =
  new mongoose.Schema({

    studentId: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    present: {
      type: Number,
      default: 0,
    },

    absent: {
      type: Number,
      default: 0,
    },

    vacation: {
      type: Number,
      default: 0,
    },

  })

module.exports =
  mongoose.model(
    "Student",
    studentSchema
  )