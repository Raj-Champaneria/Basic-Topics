let btnregister = document.getElementById("save");

btnregister.addEventListener("click", (e) => {
  e.preventDefault();
  addPlayer();
  window.location.href = "table.html";
});

function addPlayer() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let gender = document.querySelector('input[name="season"]:checked').value;
  let ch = document.querySelector('input[name="color"]:checked').value;
  

  fetch("http://localhost:3000/cricket", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      fname,
      lname,
      age,
      email,
      gender,
      ch,
      username,
      password,
    }),
  })
    .then((Response) => Response.json())
    .then((data) => console.log(data));
}
