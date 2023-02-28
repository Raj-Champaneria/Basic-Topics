let register = document.getElementById("register");
register.addEventListener("click", (e) => {
  e.preventDefault();
  let regname = /^[A-Za-z0-9]+$/;
  let fname = document.getElementById("fname").value;

  if (fname == "") 
  {
    document.getElementById("fmsg").innerHTML = "Required";
  } else if (fname.match(regname)) {
    document.getElementById("fmsg").innerHTML = "";
  } else {
    document.getElementById("fmsg").innerHTML =
      "do not write any special character ";
  }
  let lname = document.getElementById("lname").value;
  if (lname == "") 
  {
    document.getElementById("lmsg").innerHTML = "Required";
  } else if (lname.match(regname)) {
    document.getElementById("lmsg").innerHTML = "";
  } else {
    document.getElementById("lmsg").innerHTML =
      "Do not write any special character ";
  }
  let regcontact = /^\d{10}$/;
  let contact = document.getElementById("contact").value;
  if (contact == "")
   {
    document.getElementById("cmsg").innerHTML = "Required";
  } else if (contact.match(regcontact)) {
    document.getElementById("cmsg").innerHTML = "";
  } else {
    document.getElementById("cmsg").innerHTML = "please enter correct format";
  }
  let email = document.getElementById("email").value;

  if(email==""){
    document.getElementById("emsg").innerHTML="Required"
  }
  let salary = document.getElementById("salary").value;
  let password = document.getElementById("password").value;
});
