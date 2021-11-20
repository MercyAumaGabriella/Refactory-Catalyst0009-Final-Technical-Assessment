const validate = (event) => {
  const surname = document.studentform.surname;
  const givenname = document.studentform.givenname;
  const uploadphoto = document.studentform.uploadphoto;
  const studentgender = document.studentform.gender;
  const residence = document.studentform.residence;
  const nationality = document.studentform.nationality;
  const successMessage = document.getElementById("success-message");
  const country = document.studentform.country;
  const dob = document.studentform.dob;
  const title = document.studentform.title;
  const genderBox = document.getElementById("gender-box");

  const surnameERROR = document.getElementById("surname-error");
  const givennameERROR = document.getElementById("givenname-error");
  const dobError = document.getElementById("DOB-error");
  const studentResidenceERROR = document.getElementById("residence-error");
  const studentNationalityERROR = document.getElementById("nationality-error");
  const genderError = document.getElementById("gender-error");
  const titleError = document.getElementById("title-error");
  const countryError = document.getElementById("country-error");

  //regexes 
  const nonumber = /^[A-Za-z]+$/;
  let valid = false;
  const surName = surname.value.trim();
  if (surName == "") {
    surnameERROR.innerHTML = "Invalid Field!";
    surnameERROR.style = "color:red";
    surname.style.border = "1px solid red";
    surname.focus();
    valid = false;
  } else if (!(surName.length > 1 && surName.length < 16)) {
    surnameERROR.innerHTML = "Surname is between 1-16 letters";
    surnameERROR.style = "color:red";
    surname.style.border = "1px solid red";
    surname.focus();
    valid = false;
  } else if (!surName.match(nonumber)) {
    surnameERROR.innerHTML = "Surname is letters only";
    surnameERROR.style = "color:red";
    surname.style.border = "1px solid red";
    surname.focus();
    valid = false;
  } else {
    successMessage.innerHTML = "Registration was Successful !";
    successMessage.style =
      "background-color:#0bda51 ; color:#fff; font-weight:500;";
    successMessage.style.border = "1px solid #0bda51 ";
  }
  const givenName = givenname.value.trim();
  if (givenName == "") {
    givennameERROR.innerHTML = "Invalid Field!";
    givennameERROR.style = "color:red";
    givenname.style.border = "1px solid red";
    givenname.focus();
    valid = false;
  } else if (!(givenName.length > 1 && givenName.length < 16)) {
    givennameERROR.innerHTML = "Given name is between 1-16 letters";
    givennameERROR.style = "color:red";
    givenname.style.border = "1px solid red";
    givenname.focus();
    valid = false;
  } else if (!givenName.match(nonumber)) {
    givennameERROR.innerHTML = "Given name is letters only";
    givennameERROR.style = "color:red";
    givenname.style.border = "1px solid red";
    givenname.focus();
    valid = false;
  } else {
    successMessage.innerHTML = "Registration was Successful !";
    successMessage.style =
      "background-color:#0bda51 ; color:#fff; font-weight:500;";
    successMessage.style.border = "1px solid #0bda51 ";
  }
  const today = new Date();
  const birth = new Date(dob.value);
  const age = today.getFullYear() - birth.getFullYear();

  if (dob.checked == false && dob.value == "") {
    dobError.innerHTML = "Select a date of birth!";
    dobError.style = "color:red";
    dob.style.border = "1px solid red";
    dob.focus();
    valid = false;
  } else if (age < 1) {
    dobError.innerHTML = "Student is young to do the test";
    dobError.style = "color:red";
    dob.style.border = "1px solid red";
    dob.focus();
    valid = false;
  } else if (age > 150) {
    dobError.innerHTML = "Student is too old to do test";
    dobError.style = "color:red";
    dob.style.border = "1px solid red";
    dob.focus();
    valid = false;
  } else {
    successMessage.innerHTML = "Registration was Successful !";
    successMessage.style =
      "background-color:#0bda51 ; color:#fff; font-weight:500;";
    successMessage.style.border = "1px solid #0bda51";
  }
  const studentTitle = title.value.trim();
  if (studentTitle == "") {
    titleError.innerHTML = "Invalid Field!";
    titleError.style = "color:red";
    title.style.border = "1px solid red";
  } else {
    successMessage.innerHTML = "Registration was Successful !";
    successMessage.style =
      "background-color:#0bda51 ; color:#fff; font-weight:500;";
    successMessage.style.border = "1px solid #0bda51";
  }

  const studentResidence = residence.value.trim();
  if (studentResidence == "") {
    studentResidenceERROR.innerHTML = "Invalid Field!";
    residence.style = "color:red";
    residence.style.border = "1px solid red";
    residence.focus();
    valid = false;
  } else if (!(studentResidence.length > 1 && studentResidence.length < 20)) {
    studentResidenceERROR.innerHTML =
      "Residence should be between 1-20 characters";
    studentResidenceERROR.style = "color:red";
    residence.style.border = "1px solid red";
    residence.focus();
    valid = false;
  } else if (!studentResidence.match(nonumber)) {
    studentResidenceERROR.innerHTML = "Residence is letters only";
    studentResidenceERROR.style = "color:red";
    residence.style.border = "1px solid red";
    residence.focus();
    valid = false;
  } else {
    successMessage.innerHTML = "Registration was Successful !";
    successMessage.style =
      "background-color:#0bda51 ; color:#fff; font-weight:500;";
    successMessage.style.border = "1px solid #0bda51 ";
  }
  const studentNationality = nationality.value.trim();
  if (studentNationality == "") {
    studentNationalityERROR.innerHTML = "Invalid Field!";
    studentNationalityERROR.style = "color:red";
    nationality.style.border = "1px solid red";
    nationality.focus();
    valid = false;
  } else if (
    !(studentNationality.length > 5 && studentNationality.length < 20)
  ) {
    studentNationalityERROR.innerHTML = "Nationality is between 5-20 letters";
    studentNationalityERROR.style = "color:red";
    nationality.style.border = "1px solid red";
    nationality.focus();
    valid = false;
  } else if (!studentNationality.match(nonumber)) {
    studentNationalityERROR.innerHTML = "Nationality is letters only";
    studentNationalityERROR.style = "color:red";
    nationality.style.border = "1px solid red";
    nationality.focus();
    valid = false;
  } else {
    successMessage.innerHTML = "Registration was Successful !";
    successMessage.style =
      "background-color:#0bda51 ; color:#fff; font-weight:500;";
    successMessage.style.border = "1px solid #0bda51";
  }
  const gender = studentgender.value;
  if (gender == "") {
    genderError.innerHTML = "Gender Must be specified";
    genderBox.style.border = "1px solid red";
    valid = false;
  } else {
    genderBox.style.border = "1px solid green";
    genderError.style.display = "none";
  }
  const studentCountry = country.value.trim();
  if (studentCountry == "") {
    country.style.border = "2px solid red";
    countryError.innerHTML = "You must select your country of residense!";
    country.focus();
    valid = false;
  } else {
    successMessage.innerHTML = "Registration was Successful !";
    successMessage.style =
      "background-color:#0bda51 ; color:#fff; font-weight:500;";
    successMessage.style.border = "1px solid #0bda51";
  }
  
  if (uploadphoto.value == "") {
    uploadphoto.style.border = "2px solid red";
    
    uploadphoto.focus();
    valid = false;
  } else {
    successMessage.innerHTML = "Registration was Successful !";
    successMessage.style =
      "background-color:#0bda51 ; color:#fff; font-weight:500;";
    successMessage.style.border = "1px solid #0bda51";
  }

  if (!valid) {
    event.preventDefault();
    return false;
  }
};
const student = document.getElementById("form-id");

// Adding an event listener.
student.addEventListener("submit", (event) => {
  validate(event);
});
