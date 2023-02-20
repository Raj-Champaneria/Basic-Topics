const links = [
  { name: "facebook", link: "https://www.w3schools.com" },
  { name: "google", link: "https://www.google.co.in" },
  { name: "youtube", link: "https://www.youtube.com" },
];

let aside = document.createElement("aside");
console.log(aside);

let nav = document.createElement("nav");
aside.appendChild(nav);

let ul = document.createElement("ul");
nav.appendChild(ul);

for (const iterator of links) {
  let li = document.createElement("li");
  ul.appendChild(li);

  let a = document.createElement("a");
  li.appendChild(a);
  let litext = document.createTextNode(iterator.name);
  a.appendChild(litext);
  a.setAttribute("href",iterator.link);
  a.classList.add("a-decor","color");
    li.classList.add("li-decor");
}

let body=document.querySelector("body");
body.appendChild(aside);

