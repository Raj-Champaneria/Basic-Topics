// let student = [
//   { roll_no: "1", name: "raj", address: "valsad", school: "avabai",collage:"maliba" },
//   { roll_no: "2", name: "keval", address: "surat", school: "rjj" ,collage:"kbp"},
// ];

// y = {
//   roll_no: "4",
//   name: "Rohit",
//   address: "billimora",
//   school: "bai Ava bai",
//   collage: "laxmi",
// };

// let student=
// fetch("http://localhost:3000/table",{
//   method:"POST",
//   body: JSON.stringify(y),
//   headers: {"Content-type": "application/json; charset=UTF-8"}
// })
// .then(response=>response.json())
// .then(data=>localStorage.setItem("val",JSON.stringify(data)));

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("http://localhost:3000/table", {
  name: "raj",
  address: "valsad",
  school: "avabai",
  collage: "maliba",
}).then((data) => {
  console.log(data);
});
fetch("http://localhost:3000/table/1", {
  method: "DELETE",
});
fetch("http://localhost:3000/table")
  .then((res) => res.json())
  .then((data) => localStorage.setItem("data", JSON.stringify(data)));
let raj = localStorage.getItem("data");
let newRaj = JSON.parse(raj);

let a = localStorage.getItem("val");
let b = JSON.parse(a);
console.log(a);
let table = document.createElement("table");
table.classList.add("table");

function thead(t, s) {
  let thead = table.createTHead("thead");
  let tr = thead.insertRow("tr");

  for (const key in s[0]) {
    let th = document.createElement("th");
    th.classList.add("table-head");
    tr.appendChild(th);
    let text = document.createTextNode(key);
    th.appendChild(text);
  }
}

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

thead(table, newRaj);
tbody(table, newRaj);
console.log(table);

let body = document.querySelector("body");
body.appendChild(table);


// -------------------simple dynamic table without fetching on db.json

// let student = [
//   { roll_no: "1", name: "raj", address: "valsad", school: "avabai",collage:"maliba" },
//   { roll_no: "2", name: "keval", address: "surat", school: "rjj" ,collage:"kbp"},
// ];

// let table = document.createElement("table");

// function thead(t, s) {
//   let thead = table.createTHead("thead");
//   let tr = thead.insertRow("tr");

//   for (const key in s[0]) {
//     let th = document.createElement("th");
//     tr.appendChild(th);
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//   }
// }

// function tbody(t, s) {
//   let tbody = table.createTBody("tbody");
//   for (const iterator of s) {
//     let row = tbody.insertRow();
//     for (const key in iterator) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(iterator[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// thead(table, student);
// tbody(table, student);
// console.log(table);

// let body = document.querySelector("body");
// body.appendChild(table);