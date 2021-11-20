const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const path = require('path');
const app = express();

require('dotenv').config();

// Database connection.
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection now  open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
  // Requiring routes.
const studentregistration = require('./routes/student');


  
  //Middleware
  app.use(express.urlencoded({
      extended:true
  })); 
  app.use(express.static('public'));
  
  
  //Middleware configurations 
  app.set('views', 'views');
  app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
app.use('/public/imgs', express.static(__dirname + '/public/imgs'));
  
  
// Routes for the project.
app.use('/', studentregistration);





app.listen(port, () => {
  console.log(`We are listening on port ${port}`);
});


