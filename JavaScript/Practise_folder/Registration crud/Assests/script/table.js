let table = document.createElement("table");
table.classList.add("table-style");

let headers = [
  { header: "ID", key: "id" },
  { header: "First Name", key: "fname" },
  { header: "Last Name", key: "lname" },
  { header: "Age", key: "age" },
  { header: "gender", key: "gender" },
  { header: "checked Item", key: "ch" },
  { header: "Email", key: "email" },
  { header: "Username", key: "username" },
];

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
console.log(table);

function tbody(t) {
  let tbody = table.createTBody("tbody");
  table.appendChild(tbody);

  fetch("http://localhost:3000/cricket")
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data);
      for (const element of data) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        tr.classList.add("table-body-tr");
        for (const iterator of headers) {
          let td = tr.insertCell();
          td.classList.add("table-body-td");
          let text = document.createTextNode(element[iterator["key"]]);
          console.log(text);
          td.appendChild(text);
        }
        let td = document.createElement("td");
        tr.appendChild(td);

        //editbutton
        let editButton = document.createElement("button");
        let text2 = document.createTextNode("Edit");
        editButton.appendChild(text2);
        editButton.addEventListener("click", () => {
          window.location.href = "index.html";
        });

        //DeleteButton
        let deleteButton = document.createElement("button");
        let text1 = document.createTextNode("DELETE");
        deleteButton.appendChild(text1);
        td.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
          deleteData(element.id);
          table.deleteRow(tr.rowIndex);
        });

        td.appendChild(editButton);
        td.appendChild(deleteButton);
      }
    });
}

function deleteData(element) {
  fetch(`http://localhost:3000/cricket/${element}`, {
    method: "DELETE",
  });
}

tbody(table);

let body = document.querySelector("body");
body.appendChild(table);
