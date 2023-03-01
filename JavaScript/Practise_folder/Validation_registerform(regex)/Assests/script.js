let register = document.getElementById("register");
register.addEventListener("click", (e) => {
  e.preventDefault();
  let regname = /^[A-Za-z0-9]+$/;
  let fname = document.getElementById("fname").value;

  if (fname == "") {
    document.getElementById("fmsg").innerHTML = "Required";
  } else if (fname.match(regname)) {

    document.getElementById("fmsg").innerHTML = "";
  } else {
    document.getElementById("fmsg").innerHTML =
      "do not write any special character ";
  }
  let lname = document.getElementById("lname").value;
  if (lname == "") {
    document.getElementById("lmsg").innerHTML = "Required";
  } else if (lname.match(regname)) {
    document.getElementById("lmsg").innerHTML = "";
  } else {
    document.getElementById("lmsg").innerHTML =
      "Do not write any special character ";
  }
  let regcontact = /[6789][0-9]{9}/;
  let contact = document.getElementById("contact").value;
  if (contact == "") {
    document.getElementById("cmsg").innerHTML = "Required";
  } else if (contact.match(regcontact)) {
    document.getElementById("cmsg").innerHTML = "";
  } else {
    document.getElementById("cmsg").innerHTML = "please enter correct format";
  }
  let email = document.getElementById("email").value;
  let regemail=/[a-zA-Z0-9_\-\.]+[@][a-z]+[.][a-z]{2,3}/
  if (email == "") {
    document.getElementById("emsg").innerHTML = "Required"
  }
  else if (email.match(regemail)) {
    document.getElementById("emsg").innerHTML = "";
  } else {
    document.getElementById("emsg").innerHTML = "please enter correct format";
  }
  let salary = document.getElementById("salary").value;
  let regsalary=/[0-9]{2,4}/
    if (salary == "") {
    document.getElementById("smsg").innerHTML = "Required"
  }
  else if (salary.match(regsalary)) {
    document.getElementById("smsg").innerHTML = "";
  } else {
    document.getElementById("smsg").innerHTML = "please enter correct password";
  }
  let password = document.getElementById("password").value;

  let regpsd=/[0-9a-zA-Z]{3,8}/
  if(password==""){
    document.getElementById("psd").innerHTML="Required"
  }
  else if(password.match(regpsd)){
    document.getElementById("psd").innerHTML=""
  }
  else{
  document.getElementById("psd").innerHTML="password must be in 3 to 6"
  }
});
// file:///C:/Users/raj/Desktop/Raj1rivet/Basic%20Topics/Basic-Topics/JavaScript/Practise_folder/Validation_registerform(regex)/index.html?fname=as&lname=sa&email=dsfc&contact_no=9999999999&salary=99&password=aaa