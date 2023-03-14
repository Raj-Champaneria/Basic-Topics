function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

let fname = document.querySelector("#fname");
let regfname = /^[A-Za-z0-9\s]{3,25}$/;
fname.addEventListener("keyup", (e) => {
  if (fname.value == "") {
    fname.style.border = "2px solid red";
    document.querySelector("#fmsg").innerHTML = "this field is required";
  } else if (!fname.value.match(regfname)) {
    fname.style.border = "2px solid red";
    document.querySelector("#fmsg").innerHTML = "Length Should be minimum 3 and maximum 25";
  } else {
    document.querySelector("#fmsg").innerHTML = "";
    fname.style.border = "2px solid green";
  }
});

let regdes = /^[A-Za-z0-9\s]{3,100}$/;
let description = document.querySelector("#description");
let dmsg = document.querySelector("#dismsg");
description.addEventListener("keyup", (e) => {
  if (description.value == "") {
    description.style.border = "2px solid red";
    document.querySelector("#dismsg").innerHTML = "this field is required";
  } else if (!description.value.match(regdes)) {
    description.style.border = "2px solid red";
    document.querySelector("#dismsg").innerHTML = "Length Should be minimum 3 and maximum 150";
  } else {
    document.querySelector("#dismsg").innerHTML = "";
    description.style.border = "2px solid green";
  }
});

let numberred = /[0-9$\-\.]$/;

let rate = document.querySelector("#rate");
let ratemsg = document.querySelector("#ratemsg");

rate.addEventListener("keyup", (e) => {
  if (rate.value == "") {
    rate.style.border = "2px solid red";
    document.querySelector("#ratemsg").innerHTML = "this field is required";
  } else if (!rate.value.match(numberred)) {
    rate.style.border = "2px solid red";
    document.querySelector("#ratemsg").innerHTML = "enter numeric value";
  } else {
    document.querySelector("#ratemsg").innerHTML = "";
    rate.style.border = "2px solid green";
  }
});

let balance = document.querySelector("#balance");
let bmsg = document.querySelector("#bmsg");
balance.addEventListener("keyup", (e) => {
  if (balance.value == "") {
    balance.style.border = "2px solid red";
    document.querySelector("#bmsg").innerHTML = "this field is required";
  } else if (!balance.value.match(numberred)) {
    balance.style.border = "2px solid red";
    document.querySelector("#bmsg").innerHTML = "enter numeric value";
  } else {
    document.querySelector("#bmsg").innerHTML = "";
    balance.style.border = "2px solid green";
  }
});



let deposit = document.querySelector("#deposit");
let depomsg = document.querySelector("#depomsg");
deposit.addEventListener("keyup", (e) => {
  if (deposit.value == "") {
    deposit.style.border = "2px solid red";
    document.querySelector("#depomsg").innerHTML = "this field is required";
  } else if (!deposit.value.match(numberred)) {
    deposit.style.border = "2px solid red";
    document.querySelector("#depomsg").innerHTML = "enter numeric value";
  } else {
    document.querySelector("#depomsg").innerHTML = "";
    deposit.style.border = "2px solid green";
  }
});

btnsave = document.getElementById("savebtn");
btnsave.addEventListener("click", (e) => {
  let fname = document.querySelector("#fname").value;
  let description = document.querySelector("#description").value;
  let status = document.querySelector("#status").value;
  let rate = document.querySelector("#rate").value;
  let balance = document.querySelector("#balance").value;
  let deposit=document.querySelector("#deposit").value;

  if (
    fname == "" ||
    status == "status" ||
    description == "" ||
    status == "status" ||
    rate == "" ||
    balance == "" ||
    deposit==""
  ) {
    alert("please input all fields");
  } else if (
    fmsg.innerHTML == "" &&
    dmsg.innerHTML == "" &&
    ratemsg.innerHTML == "" &&
    bmsg.innerHTML == "" &&
    depomsg.innerHTML == ""
  ) {
    let storedata = {
      method: "POST",
      body: JSON.stringify({
        fname,
        description,
        status,
        rate,
        balance,
        deposit
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch("http://localhost:3000/form", storedata)
      .then((res) => res.json())
      .then((data) => console.log(data));
    // alert("DATA ADDED");
  } else {
    alert("error");
  }
});

let table = document.createElement("table");
table.classList.add("table-css");
let headers=[{header:"#",key:"id"},{header:"NAME",key:"fname"},{header:"DESCRIPTION",key:"description"},{header:"STATUS",key:"status"},{header:"RATE",key:"rate"},{header:"BALANCE",key:"balance"},{header:"DEPOSIT",key:"deposit"}]


function thead(t) {
  let thead = table.createTHead("thead");
  table.appendChild(thead);
  let tr = thead.insertRow();

  for (let iterator of headers) {
    let th = document.createElement("th");
    th.classList.add("table-th");
    tr.appendChild(th);
    let text = document.createTextNode(iterator.header);
    th.appendChild(text);
  }
  let th = document.createElement("th");
  let text = document.createTextNode("ACTION");
  th.appendChild(text);
  th.classList.add("table-th");
  tr.appendChild(th);
}
thead(table);


function tbody(t) {
  let tbody = table.createTBody("tbody");
  table.appendChild(tbody);

  fetch("http://localhost:3000/form")
    .then((Response) => Response.json())
    .then((data) => {
      for (const element of data) {
        let tr = tbody.insertRow();
        tr.classList.add("tabletr");
        for (const iterator of headers) {
          let cell = tr.insertCell();
          let text = document.createTextNode(element[iterator["key"]]);
          cell.appendChild(text);
        }
        let td = document.createElement("td");
        tr.appendChild(td);
        let btnEdit = document.createElement("button");
        let edittext = document.createTextNode("EDIT");
        btnEdit.classList.add("table-update-btn");
        btnEdit.appendChild(edittext);
        let Deletetext = document.createTextNode("DELETE");
        let btnDelete = document.createElement("button");
        btnDelete.appendChild(Deletetext);
        btnDelete.classList.add("table-delete-btn");
        td.appendChild(btnEdit);
        td.appendChild(btnDelete);

        btnDelete.addEventListener("click",(e)=>{
          e.preventDefault();
          Delete()
        } );

        function Delete() {
          fetch(`http://localhost:3000/form/${element.id}`, {
            method: "DELETE",
          });
        }

        btnEdit.addEventListener("click", Edit);
        function Edit() {
          document.getElementById("fname").value = element.fname;
          document.getElementById("description").value = element.description;
          document.getElementById("status").value = element.status;
          document.getElementById("rate").value = element.rate;
          document.getElementById("balance").value = element.balance;
          document.getElementById("deposit").value = element.deposit;

          let updates = document.getElementById("update");
          updates.addEventListener("click", update);
        

          function update() {
            fetch(`http://localhost:3000/form/${element.id}`, {
              method: "PUT",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify({
                fname: document.getElementById("fname").value,
                description: document.getElementById("description").value,
                status: document.getElementById("status").value,
                rate: document.getElementById("rate").value,
                balance: document.getElementById("balance").value,
                deposit:document.getElementById("deposit").value
              }),
            });
          }
        }
      }
    });
}
tbody(table);

function tablesearch() {
  let input, filter, table, tr, td, i, txtval;

  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementsByClassName("table");
  tr = document.getElementsByClassName("tabletr");
  // td=document.getElementsByClassName("tabletd");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];

    if (td) {
      txtval = td.textContent || td.innetText;
      if (txtval.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none"; 
      }
    }
  }

}

console.log(table);
let body=document.querySelector("body");
body.appendChild(table)
