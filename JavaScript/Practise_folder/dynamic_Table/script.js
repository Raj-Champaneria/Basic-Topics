let student = [
  { roll_no: "1", name: "raj", address: "valsad", school: "avabai" },
  { roll_no: "2", name: "keval", address: "surat", school: "rjj" },
];

let table = document.createElement("table");

function thead(t, s) {
  let thead = table.createTHead("thead");
  let tr = thead.insertRow("tr");

  for (const key in s[0]) {
    let th = document.createElement("th");
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

thead(table, student);
tbody(table, student);
console.log(table);

let body = document.querySelector("body");
body.appendChild(table);
