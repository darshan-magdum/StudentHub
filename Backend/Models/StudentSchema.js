const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  contactNo: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit contact number']
  },
  collegeName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

module.exports = mongoose.model('Student-Accounts', StudentSchema);
