let table = document.createElement("table");
let headers = [
  { header: "ID", key: "id" },
  { header: "Student Name", key: "sname" },
  { header: "Student Subject", key: "subject" },
];
function thead(t) {
  let thead = table.createTHead("thead");
  table.appendChild(thead);
  let tr = thead.insertRow();
  for (const iterator of headers) {
    let th = document.createElement("th");
    tr.appendChild(th);
    let text = document.createTextNode(iterator.header);
    th.appendChild(text);
  }
  let th = document.createElement("th");
  let text = document.createTextNode("ACTION");
  th.appendChild(text);
  tr.appendChild(th);
}
thead(table);

let saveStudent = document.getElementById("savstudent");
saveStudent.addEventListener("click", seestudent);

function seestudent() {
  let sname = document.getElementById("sname").value;
  let subject = document.getElementById("subject").value;
  fetch("http://localhost:3000/form", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ sname: sname, subject: subject }),
  })
    .then((Response) => Response.json())
    .then((data) => console.log(data));
}

function tbody(t) {
  let tbody = table.createTBody("tbody");
  table.appendChild(tbody);

  fetch("http://localhost:3000/form")
    .then((Response) => Response.json())
    .then((data) => {
      for (const element of data) {
        let tr = tbody.insertRow();
        for (const iterator of headers) {
          let cell = tr.insertCell();
          let text = document.createTextNode(element[iterator["key"]]);
          cell.appendChild(text);
        }
        let td = document.createElement("td");
        tr.appendChild(td);
        let btnEdit = document.createElement("button");
        let edittext = document.createTextNode("EDIT");
        btnEdit.appendChild(edittext);
        let Deletetext = document.createTextNode("DELETE");
        let btnDelete = document.createElement("button");
        btnDelete.appendChild(Deletetext);
        td.appendChild(btnEdit);
        td.appendChild(btnDelete);

        btnDelete.addEventListener("click", DeleteStudent);

        function DeleteStudent() {
          fetch(`http://localhost:3000/form/${element.id}`, {
            method: "DELETE",
          });
        }

        btnEdit.addEventListener("click", EditStudent);
        function EditStudent() {
          document.getElementById("sname").value = element.sname;
          document.getElementById("subject").value = element.subject;

          let updateStudent = document.getElementById("updateStudent");
          updateStudent.addEventListener("click", updateStudents);

          function updateStudents() {
            fetch(`http://localhost:3000/form/${element.id}`, {
              method: "PUT",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify({
                sname: document.getElementById("sname").value,
                subject: document.getElementById("subject").value,
              }),
            });
          }
        }
      }
    });
}
tbody(table);

console.log(table);
let body = document.querySelector("body");
body.appendChild(table);
table.classList.add("table-css");
