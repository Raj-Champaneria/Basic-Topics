//Get The Data Get Method
// fetch("http://localhost:3000/data")
// .then(Response=>Response.json())
// .then(data=>console.log(data));

//Post Data means add data using POST method

// btnPostData=document.getElementById("StoreData");
// btnPostData.addEventListener("click",onStoreData)

// function onStoreData(){
//     fetch("http://localhost:3000/data", {
//         method: "POST",
//         body: JSON.stringify({
//           name:"Karan",
//           sname:"Tandel"

//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8"
//         },
//       })
//         .then((Response) => Response.json())
//         .then((data) => console.log(data));
// }

//Delete Method

// fetch("http://localhost:3000/data/2",
// {
//     method:"DELETE"
// })
// .then(Response=>Response.json())
// .then(data=>console.log(data))

//Put Method

// fetch("http://localhost:3000/data/3", {
//   method: "PUT",
//   body: JSON.stringify({
//     name: "Mehek",
//     sname: "Patel",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((Response) => Response.json())
//   .then((data) => console.log(data));

// /PATCH Method
// fetch("http://localhost:3000/data/7", {
//   method: "PATCH",
//   body: JSON.stringify({
//     sname: "Patel",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((Response) => Response.json())
//   .then((data) => console.log(data));
