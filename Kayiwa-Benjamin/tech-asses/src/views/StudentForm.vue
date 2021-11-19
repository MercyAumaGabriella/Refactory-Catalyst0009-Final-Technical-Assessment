<template>
  <div class="about">
    <h1>This is The Student Registration Form page</h1>
  </div>

  <div class="box">
    

    <form  id="form" @submit="checkForm" action="post" method="post">
      <h2>Student Registration Form</h2>

      <p v-if="checkForm" class="registered">
        Registered Successfully
      </p>
      <div align="left" style="float:left;">
        <label for="sname" class="required">Surname</label>
      <input type="text" id="sname" v-model="sname"  name="sname" placeholder="Enter Surname" minlength="1" maxlength="16" required> <br> <br>

      <label for="gname" class="required">Given name </label>
      <input type="text" id="gname" v-model="gname" name="gname" placeholder="Enter Given Name" minlength="1" maxlength="16" required> <br>

      <label for="title">Title </label>
     <select name="title" id="title"  >
       <option value="" disabled>-- Select Title --</option>
        <option value="Ug">Mr.</option>
        <option value="Ke">Mrs.</option>
        <option value="Tz">Miss</option>
        <option value="Rw">Dr.</option>
        <option value="Rw">Prof.</option>
        <option value="Bu">Eng.</option>
      </select>
      </div>

      <div align="right" >
        <input type="file" id="myFile" class="file-upload"  name="filename" required>
      <input type="button" value="Upload Photo">
      </div>

      <div align="center">
        <label for="gender" class="required">Gender  </label> <br> <br>
      <input type="radio" id="male" name="gender" value="Male" selected>
      <label for="male">Male</label>
      <input type="radio" name="gender" id="female" value="Female">
      <label for="female">Female</label>


      </div>
      <div align="left">
        <label for="dob" class="required">Date of Birth </label> 
      <input type="date" v-model="dob" required placeholder="DD/MM/YYYY" pattern="\D{4}-\D{2}-\D{2}">
      </div>

      <div align="right">
        <label for="country" class="required">Country </label> 
      <select name="country" id="country" >
        <option value="" disabled>-- Select Country --</option>
        <option value="Ug">Uganda</option>
        <option value="Ke">Kenya</option>
        <option value="Tz">Tanzania</option>
        <option value="Rw">Rwanda</option>
        <option value="Bu">Burundi</option>
      </select> <br>
      </div>

      <label for="placeofresidence" class="required" >Place of Residence  </label> 
      <input style="width:100%;" type="text" minlength="5" maxlength="20" v-model="por" required> <br> <br>

      <label for="" class="required">Nationality </label>
      <input style="width:100%;" type="text" v-model="nationality" required><br> <br> <br>

      <input  type="submit" value="Register " class="btn">
    </form>

  </div>
</template>

<script>
export default {
  
  methods: {
    checkfForm() {

    }

    },
    addStudent(){
      let uri = 'http://localhost:4000/studenddb/add'
      this.axios.post(uri, this.post).then(() => {
        this.$router.push({name: 'students'})
      })

    }
  }

</script>

<style  scoped>
form {
  border: solid 1px black;
  margin: 20px;
  padding: 30px;
  padding-bottom: 40px;

  
}
/* input [type="text"] {
  display: block;
  padding: 10px 6px;
  margin:10px;

} */
/* label {
  color: #aaa;
  display: inline-block;
  margin: 1px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
} */
label {
  margin: 10px 10px;
  padding: 10px;

}
h2{
  background-color: purple;
  color: white;
  text-align: left;
  padding: 20px;
}
.required:after {
  content: " *";
  color: red;
}
.right {
  align-content: right;
}
.registered {
  background-color: green;
  color: white;
  padding: 10px;
}
.btn {
  background-color: purple;
  color: white;
  border:none;
  padding: 16px 60px;
  border-radius: 5px;
  float: right;
  font-weight:bolder;
  margin: -20px;
  margin-right: 1px;

}
.box {
  margin: 0 400px;
}
.file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 50px 2px;


}
input [type="text"], select {
  padding:12px 20px;
  margin:8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>


