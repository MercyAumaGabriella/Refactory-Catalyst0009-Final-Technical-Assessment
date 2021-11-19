const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//created express app
const app = express();

app.use(bodyParser.json());
app.use(express.static('form'));
app.use(bodyParser.urlencoded({
    extended:true
}))


app.get("/", (req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":"*"
    });
    return res.redirect('Student-Registration-form.html');
});

// Connect to database
mongoose.connect('mongodb://localhost:27017/StudentRegistration', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to Mongodb...'))
   .catch(err => console.error('Could not connect to Mongodb...', err))


let db = mongoose.connection;

db.on('error', ()=>console.log('Error in connecting to database'));

db.once('open', ()=>console.log('Connected to Database successfully!!'));

//from the html port
app.post("/register", (req, res)=>{
    let surName = req.body.surName;
    let givenName = req.body.givenName;
    let title = req.body.title;
    let gender = req.body.gender;
    let dob = req.body.dateOfBirth;
    let country  = req.body.country;
    let residence = req.body.residence;
    let nationality = req.body.nationality;

    //Data to be sent to database
    let data = {
        "Sur Name": surName,
        "Given Name": givenName,
        "Title": title,
        "Gender": gender,
        "Date Of Birth": dob,
        "Country": country,
        "Place Of Residence": residence,
        "Nationality": nationality
    }

    //insert data into database
    db.collection('students').insertOne(data,(err, collection)=>{
        if(err){
            throw err;
        }
        console.log("Student has been registered successfully!!");
    });

    //redirect to clean page
    return res.redirect('register_success.html');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`Listening on PORT ${PORT}`);