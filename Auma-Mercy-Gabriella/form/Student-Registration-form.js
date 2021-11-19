const firstName = document.getElementById('surName');
const lastName = document.getElementById('givenName');
const dob = document.getElementById("dob");
const country = document.getElementById("country");
const residence = document.getElementById("residence");

const nationality = document.getElementById("nationality");


//form
const form  =  document.getElementsByClassName('form');

// Validation colours
const green = '#4CAF50';
const red = '#F44336';

 // Validators
 function validateFirstName() {
    // check if is empty
    if (checkIfEmpty(firstName)) return;
    return true;
  }
  function validateLastName() {
    // check if is empty
    if (checkIfEmpty(lastName)) return;
    return true;
  }

  function validateDoB(){
    if (checkIfEmpty(dob)) return;
    return true;
  }

  function validateCountry(){
    if (checkIfEmpty(country)) return;
    return true;
  }

  function validateResidence(){
    if (checkIfEmpty(residence)) return;
    return true;
  }

  function validateNationality(){
    if (checkIfEmpty(nationality)) return;
    return true;
  }

  // Handle form
form.addEventListener('submit', function(event) {
    // Prevent default behaviour
    event.preventDefault();
    if (
      validateFirstName() &&
      validateLastName()){
          alert("Student Successfully registered!!");
    }
  });


  
  // Utility functions
  function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) {
      // set field invalid
      setInvalid(field, 'Invalid field');
      return true;
    } else {
      // set field valid
      setValid(field);
      return false;
    }
  }
  function isEmpty(value) {
    if (value === '') return true;
    return false;
  }
  function setInvalid(field, message) {
    field.className = 'invalid';
    field.style.width = '250%';
    field.style.border = "1px solid red";
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
  }
  function setValid(field) {
    field.className = 'valid';
    field.style.width = '250%';
    field.style.border = "1px solid #542a52";
    field.nextElementSibling.innerHTML = '';
    //field.nextElementSibling.style.color = green;
  }

  function validateRadio(field) {

  }
 