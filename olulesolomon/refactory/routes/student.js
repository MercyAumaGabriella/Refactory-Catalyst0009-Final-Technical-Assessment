const express = require('express');
const multer = require('multer');
const path = require ('path');

const router = express.Router();

const Student = require('../models/student');

// Route to the registration page.
router.get('/', (req, res) => {
  res.render('index');
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/img");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  var upload = multer({ storage: storage });
  
  // Register student information to the database
  
  router.post("/", upload.single("uploadphoto"), async (req, res) => {
    console.log(req.body);
    try {
      const studentReg = new Student(req.body);
      studentReg.uploadphoto = req.file.path;
      console.log(req.file.path);
      await studentReg.save();
        res.redirect("/");
    } catch (error) {
      console.log(error);
      res.status(400).send("Error");
    }
  });
  

module.exports = router;