const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { jwtkey } = require('../keys');
const Student = require('../Models/StudentSchema');

// Validation schema for signup using Joi
const signupSchema = Joi.object({
  studentName: Joi.string().required().label('Student Name'),
  email: Joi.string().email().required().label('Email'),
  password: Joi.string().required().min(6).label('Password'),
  contactNo: Joi.string().required().label('Contact Number'),
  collegeName: Joi.string().required().label('College Name')
});

// Route: POST /signup
router.post('/signup', async (req, res) => {
  try {
    // Validate request body using Joi
    const { error } = signupSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const { studentName, email, password, contactNo, collegeName } = req.body;

    // Check if student already exists
    let student = await Student.findOne({ email });
    if (student) {
      return res.status(400).send({ message: 'Student already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new student
    student = new Student({
      studentName,
      email,
      password: hashedPassword,
      contactNo,
      collegeName
    });

    // Save the student to the database
    await student.save();

    // Generate JWT token
    const token = jwt.sign({ studentId: student._id }, jwtkey);

    // Return token and student ID
    res.status(201).send({ token, studentId: student._id, message: 'Student registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Validation schema for login using Joi
const loginSchema = Joi.object({
  email: Joi.string().email().required().label('Email'),
  password: Joi.string().required().label('Password'),
});

// Route: POST /login
router.post('/login', async (req, res) => {
  try {
    // Validate request body using Joi
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const { email, password } = req.body;

    // Check if student exists
    let student = await Student.findOne({ email });
    if (!student) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    // Student authenticated, generate JWT token
    const token = jwt.sign({ studentId: student._id }, jwtkey);

    // Return the token and any additional data you may need
    res.status(200).send({ token, studentId: student._id, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Route: GET /students
router.get('/Getallstudents', async (req, res) => {
  try {
    const students = await Student.find().select('-password');

    // Return the array of students
    res.status(200).send(students);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Route: GET /student/:studentId
router.get('/student/:studentId', async (req, res) => {
  const studentId = req.params.studentId;

  try {
    const student = await Student.findById(studentId).select('-password');

    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }

    // Return student details
    res.status(200).send(student);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Validation schema for updating student details using Joi
const updateSchema = Joi.object({
  studentName: Joi.string().optional().label('Student Name'),
  email: Joi.string().email().optional().label('Email'),
  contactNo: Joi.string().optional().label('Contact Number'),
  collegeName: Joi.string().optional().label('College Name')
});

// Route: PUT /student/:studentId
router.put('/editstudent/:studentId', async (req, res) => {
  const studentId = req.params.studentId;
  
  try {
    // Validate request body using Joi
    const { error } = updateSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const { studentName, email, contactNo, collegeName } = req.body;

    // Find the student by ID
    let student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }

    // Update fields if provided
    if (studentName) student.studentName = studentName;
    if (email) student.email = email;
    if (contactNo) student.contactNo = contactNo;
    if (collegeName) student.collegeName = collegeName;

    // Save the updated student details
    await student.save();

    // Return success response
    res.status(200).send({ message: 'Student updated successfully', student });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Route: DELETE /student/:studentId
router.delete('/DeleteStudent/:studentId', async (req, res) => {
  const studentId = req.params.studentId;

  try {
    // Find and delete the student by ID
    const student = await Student.findByIdAndDelete(studentId);

    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }

    // Return success response
    res.status(200).send({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
