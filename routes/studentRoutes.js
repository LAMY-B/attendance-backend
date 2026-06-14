const express = require("express")
const router = express.Router()

const Student =
  require("../models/Student")

router.get("/", async (req, res) => {

  try {

    const students =
      await Student.find()

    res.json(students)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

})

router.post("/", async (req, res) => {

  try {

    const student =
      new Student(req.body)

    await student.save()

    res.status(201).json(student)

  } catch (error) {

    res.status(400).json({
      message: error.message,
    })

  }

})

router.delete("/:id", async (req, res) => {

  try {

    await Student.findByIdAndDelete(
      req.params.id
    )

    res.json({
      message:
        "Student deleted",
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

})

module.exports = router