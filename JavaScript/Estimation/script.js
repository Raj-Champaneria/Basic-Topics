var header = {
  firstname: "FIRST NAME",
  subject: "SUBJECT",
  id: "ID",
  action: "ACTION",
};



let table = document.createElement("table");
table.classList.add("table");
function thead(t, s) {
  let thead = table.createTHead("thead");
  let tr = thead.insertRow("tr");

  for (const key in s) {
    let th = document.createElement("th");
    tr.appendChild(th);
    let text = document.createTextNode(s[key]);
    th.appendChild(text);
  }
}
thead(table, header);

fetch("http://localhost:3000/form")
  .then((res) => res.json())
  .then((data) => localStorage.setItem("data", JSON.stringify(data)));
let raj = localStorage.getItem("data");
let newRaj = JSON.parse(raj);

function tbody(t, s) {
  let tbody = table.createTBody("tbody");
  for (const iterator of s) {
    let row = tbody.insertRow();
    for (const key in iterator) {
      let cell = row.insertCell();
      let text = document.createTextNode(iterator[key]);
      cell.appendChild(text);
    }
  }
}

tbody(table, newRaj);

let body = document.querySelector("body");
body.appendChild(table);
console.log(table);

// let form=document.getElementById('form');
// form.addEventListener("submit",(e)=>
// {
//     e.preventDefault();
//     const formData=new FormData(form);
//     console.log(formData);
//     let x=Object.fromEntries(formData.entries());
//     console.log(x);
//     let y=JSON.stringify(x);
//     console.log(y);

//     let saveData={
//         method:"POST",
//         headers: {"Content-type": "application/json;charset=UTF-8"},
//         body:y
//     };
//     let request=fetch("http://localhost:3000/form",saveData)
//                 .then(response=>response.json())
//                 .then(data=>console.log(data))
//                 .catch(err=>console.log())
// }
// );
// ---------------second-Method--------------------------------
let form = document.getElementById("savebtn");

savebtn.addEventListener("click", (e) => {
    e.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("subject").value;
  let storedata = {
    method:"POST",
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body:JSON.stringify({firstname:fname,subject:lname})
  };
  let request=fetch("http://localhost:3000/form",storedata)
                .then(response=>response.json())
                 .then(data=>console.log(data))
                 .catch(err=>console.log())
});
