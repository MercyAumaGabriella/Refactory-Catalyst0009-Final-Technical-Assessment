const mongoose  = require('mongoose')
const Schema = mongoose.Schema

let Student = new Schema({
    sname: {
        type: String
    },
    gname: {
        type: String
    },
    title: {
        type: String
    },
    file : {
        data : Buffer,
        contentType: String
    },
    gender: String,
    date: String,
    country:String,
    placeofresidence:String,
    nationality:String





})

var multer = require('multer')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

module.exports = mongoose.model('Form',Form)