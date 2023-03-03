let table = document.createElement("table");
table.classList.add("table")
let headers = [
  { header: "First Name", key: "fname" },
  { header: "Last Name", key: "lname" },
  { header: "Email", key: "email" },
  { header: "Contact", key: "contact" },
  { header: "Salary", key: "salary" },
];
function thead(t) {
  let thead = table.createTHead("thead");
  table.appendChild(thead);

  for (const iterator of headers) {
    let th=document.createElement("th");
    thead.appendChild(th);
    th.classList.add("table-th");
    let text=document.createTextNode(iterator.header);
    th.appendChild(text);
  }
}
thead(table);

function tbody(){
    let tbody=table.createTBody("tbody");
    table.appendChild(tbody);
    // tbody.innerHTML=" "
    
    fetch("http://localhost:3000/validation")
    .then(res=>res.json())
    .then(data=>{
        for (const element of data) {
            let tr=document.createElement("tr");
            tr.classList.add("tabletr");
            tbody.appendChild(tr)
            for (const iterator of headers) {
               let td=document.createElement("td");
               tr.appendChild(td);
               let text=document.createTextNode(element[iterator["key"]]);
               td.appendChild(text)
            }
        }
    })
}
tbody()

// let search=document.getElementById("search-input");
// search.addEventListener("keyup",(e)=>{
//     e.preventDefault();
//     let tbody=table.createTBody("tbody");
//     table.appendChild(tbody);
//     fetch("http://localhost:3000/validation")
//     .then(res=>res.json())
//     .then(data=>{
//         let array=data.filter(item=>search.value=" " || item.fname.includes(search.value));
//         tbody.innerHTML=" "
//         for (const element of array) {
//             let tr=document.createElement("tr");
//             tbody.appendChild(tr)
//             for (const iterator of headers) {
//                let td=document.createElement("td");
//                tr.appendChild(td);
//                let text=document.createTextNode(element[iterator["key"]]);
//                td.appendChild(text)
//             }
//         }
//     })
// })

function tablesearch() {
  let input, filter, table, tr, td, i, txtval;

  input = document.getElementById("searchinput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementsByClassName("table");
  tr = document.getElementsByClassName("tabletr");
  td=document.getElementsByClassName("tabletd");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];


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

let container=document.querySelector(".container");
let div=document.createElement("div");
container.appendChild(div);
div.classList.add("div-wrapper");
div.appendChild(table);
