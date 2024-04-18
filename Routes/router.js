 
const express= require('express')
const userController = require('../controllers/userControllers')

const router = new express.Router()

// admin student-registration
router.post('/student-registration',userController.studentRegistration)

// get all student data
router.get('/all-students',userController.getAllStudents)

module.exports= router
