// let register = document.getElementById("register");
// register.addEventListener("click", (e) => {
//   e.preventDefault();
//   let regname = /^[A-Za-z0-9]+$/;
//   let fname = document.getElementById("fname").value;

//   if (fname == "") {
//     document.getElementById("fmsg").innerHTML = "*";
//   } else if (fname.match(regname)) {
//     document.getElementById("fmsg").innerHTML = "";
//   } else {
//     document.getElementById("fmsg").innerHTML =
//       "do not write any special character ";
//   }
//   let lname = document.getElementById("lname").value;
//   if (lname == "") {
//     document.getElementById("lmsg").innerHTML = "*";
//   } else if (lname.match(regname)) {
//     document.getElementById("lmsg").innerHTML = "";
//   } else {
//     document.getElementById("lmsg").innerHTML =
//       "Do not write any special character ";
//   }
//   let regcontact = /[6789][0-9]{9}/;
//   let contact = document.getElementById("contact").value;
//   if (contact == "") {
//     document.getElementById("cmsg").innerHTML = "*";
//   } else if (contact.match(regcontact)) {
//     document.getElementById("cmsg").innerHTML = "";
//   } else {
//     document.getElementById("cmsg").innerHTML = "please enter correct format";
//   }
//   let cemailregEx = /^([a-zA-Z\_.\0-9]+)@1rivet\.(com)$/;

//   let email = document.getElementById("email").value;
//   // let regemail = /[a-zA-Z0-9_\-\.]+[@][a-z0-9]+[.][a-z]{2,3}$/;
//   if (email == "") {
//     document.getElementById("emsg").innerHTML = "*";
//   } else if (!email.match(cemailregEx)) {
//     document.getElementById("emsg").innerHTML = "emailreg";
//   } else {
//     document.getElementById("emsg").innerHTML = "";
//   }
//   let salary = document.getElementById("salary").value;
//   let regsalary = /^\D+$/;
//   if (salary > 5000) {
//     document.getElementById("smsg").innerHTML = "";
//   } else if (salary == "") {
//     document.getElementById("smsg").innerHTML = "*";
//   } else if (salary.match(regsalary)) {
//     document.getElementById("smsg").innerHTML = "in digits only";
//   } else {
//     document.getElementById("smsg").innerHTML = "salary must be more than 5000";
//   }
//   let password = document.getElementById("password").value;

//   // let regpsd = /^[A-Za-z0-9][A-Z]{1}\w{8,16}$/;
//   // let regpsd= /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

//   // let morethan8=/^[0-9a-zA-Z_]{8,16}/
//   // if (password == "") {
//   //   document.getElementById("psd").innerHTML = "*";
//   // } else if (password.match(regpsd)) {
//   //   document.getElementById("psd").innerHTML = "";
//   // } else {
//   //   document.getElementById("psd").innerHTML = "password must be in 8 to 16";
//   // }
//   if (password == "") {
//     document.getElementById("psd").innerHTML = "*";
//   } else if (!(password.length > 8)) {
//     document.getElementById("psd").innerHTML = "length is so short";
//   } else if (!(password.length < 16)) {
//     document.getElementById("psd").innerHTML = " length is so big";
//   } else {
//     document.getElementById("psd").innerHTML = "";
//   }

//   if(fmsg.innerHTML=="" && lmsg.innerHTML=="" && cmsg.innerHTML=="" && smsg.innerHTML=="" && psd.innerHTML=="")
//   {
//     let storedata = {
//       method: "POST",
//       body: JSON.stringify({
//         fname,
//         lname,
//         email,
//         contact,
//         salary
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     };

//     fetch("http://localhost:3000/validation",storedata)
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }

// });

//onkeypress
let buttonRegister=document.getElementById("register");
// document.querySelector("#register").classList.add("green");

let fname = document.getElementById("fname");
let regname = /^[A-Za-z]*$/;
fname.addEventListener("keyup", (e) => {
  document.querySelector("#fname").classList.add("green");
  document.querySelector("#register").classList.add("green");

  if(fname.value==""){
    fname.style.border = "2px solid red";
    document.querySelector("#fmsg").innerHTML = "*";
    buttonRegister.style.border="2px solid red"
  }
  else if (!(fname.value.length < 15)) {
    fname.style.border = "2px solid red";
    document.querySelector("#fmsg").innerHTML = "maxlimit reached";
    buttonRegister.style.border="2px solid red"

  } else if (!fname.value.match(regname)) {
    fname.style.border = "2px solid red";
    document.querySelector("#fmsg").innerHTML = "Enter Proper Value";
    buttonRegister.style.border="2px solid red"

  } else {
    document.querySelector("#fmsg").innerHTML = "";
    fname.style.border = "2px solid green";
    buttonRegister.style.border="2px solid green";

  }
});
let lname = document.getElementById("lname");
lname.addEventListener("keyup", (e) => {
  document.querySelector("#lname").classList.add("green");
  document.querySelector("#register").classList.add("green");

  if(lname.value==""){
    lname.style.border = "2px solid red";
    document.querySelector("#lmsg").innerHTML = "*";
    buttonRegister.style.border="2px solid red"
  }
  else if (!(lname.value.length < 15)) {
    lname.style.border = "2px solid red";
    document.querySelector("#lmsg").innerHTML = "maxlimit reached";
    buttonRegister.style.border="2px solid red"

  } else if (!lname.value.match(regname)) {
    lname.style.border = "2px solid red";
    document.querySelector("#lmsg").innerHTML = "Enter Proper Value";
    buttonRegister.style.border="2px solid red"

  } else {
    document.querySelector("#lmsg").innerHTML = "";
    lname.style.border = "2px solid green";
    buttonRegister.style.border="2px solid green";

  }
});
let email = document.getElementById("email");
let cemailregEx = /^([a-zA-Z\_.\0-9]+)@1rivet\.(com)$/;
email.addEventListener("keyup", (e) => {
  document.querySelector("#fname").classList.add("green");
  document.querySelector("#register").classList.add("green");

  if (email.value == "") {
    document.getElementById("emsg").innerHTML = "*";
    email.style.border = "2px solid red";
    buttonRegister.style.border="2px solid red"

  } else if (!email.value.match(cemailregEx)) {
    document.getElementById("emsg").innerHTML =
      "email must end with 1rivet.com";
    email.style.border = "2px solid red";
    buttonRegister.style.border="2px solid red"
  } else {
    document.getElementById("emsg").innerHTML = "";
    email.style.border = "2px solid green";
    buttonRegister.style.border="2px solid green";

  }
});
let regcontact = /[6789][0-9]{9}/;
let contact = document.getElementById("contact");
contact.addEventListener("keyup", (e) => {
  document.querySelector("#contact").classList.add("green");
  document.querySelector("#register").classList.add("green");
  if (contact.value == "") {
    document.getElementById("cmsg").innerHTML = "*";
    contact.style.border = "2px solid red";
    buttonRegister.style.border="2px solid red";
    
  } else if (!contact.value.match(regcontact)) {
    contact.style.border = "2px solid red";
    document.getElementById("cmsg").innerHTML = "please enter correct format";
    buttonRegister.style.border="2px solid red"

  } else {
    document.getElementById("cmsg").innerHTML = "";
    contact.style.border = "2px solid green";
    buttonRegister.style.border="2px solid green";

  }
});

let salary = document.getElementById("salary");
let regsalary = /^\D+$/;
salary.addEventListener("keyup", (e) => {
  document.querySelector("#salary").classList.add("green");
  document.querySelector("#register").classList.add("green");

  if (salary.value > 5000) {
    document.getElementById("smsg").innerHTML = "";
    salary.style.border = "2px solid green";
    buttonRegister.style.border="2px solid green";

  } else if (salary.value == "") {
    document.getElementById("smsg").innerHTML = "*";
    salary.style.border = "2px solid red";
    buttonRegister.style.border="2px solid red"

  } else if (salary.value.match(regsalary)) {
    document.getElementById("smsg").innerHTML = "in digits only";
    salary.style.border = "2px solid red";
    buttonRegister.style.border="2px solid red"

  } else if(salary.value<5000) {
    document.getElementById("smsg").innerHTML = "salary must be more than 5000";
    buttonRegister.style.border="2px solid red";

  }
  else{
    document.getElementById("smsg").innerHTML = "";
    salary.style.border = "2px solid green";
    buttonRegister.style.border="2px solid green";
  }
});

let password = document.getElementById("password");
password.addEventListener("keyup", (e) => {
  document.querySelector("#salary").classList.add("green");
  document.querySelector("#register").classList.add("green");

if (password.value == "") {
  document.getElementById("psd").innerHTML = "*";
  password.style.border = "2px solid red";
  buttonRegister.style.border="2px solid red"

} else if (!(password.value.length > 8)) {
  document.getElementById("psd").innerHTML = "length is so short";
  password.style.border = "2px solid red";
  buttonRegister.style.border="2px solid red"

} else if (!(password.value.length < 16)) {
  document.getElementById("psd").innerHTML = " length is so big";
  password.style.border = "2px solid red";
  buttonRegister.style.border="2px solid red"

} else {
  document.getElementById("psd").innerHTML = "";
  password.style.border = "2px solid green";
  buttonRegister.style.border="2px solid green";

}
})

let register=document.getElementById("register");
register.addEventListener("click",(e)=>{
e.preventDefault();
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let contact = document.getElementById("contact").value;
let salary = document.getElementById("salary").value;
let password = document.getElementById("password").value;


if(fname=="" || lname=="" || email=="" || contact=="" || salary=="" || password==""){
  alert ("please fill all fields");
}
 else if(fmsg.innerHTML=="" && lmsg.innerHTML=="" && cmsg.innerHTML=="" && smsg.innerHTML=="" && psd.innerHTML=="")
  {
    let storedata = {
      method: "POST",
      body: JSON.stringify({
        fname,
        lname,
        email,
        contact,
        salary
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    fetch("http://localhost:3000/validation",storedata)
      .then((res) => res.json())
      .then((data) => console.log(data));
      // console.log(data.fname);
  }

});
