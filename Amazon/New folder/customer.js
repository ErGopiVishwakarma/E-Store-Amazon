let burger = document.getElementById("burger");
let SideBar = document.getElementById("sideBar");
let nav = document.getElementById("nav");

let count = 0;
burger.addEventListener("click", () => {
  if (count == 0) {
    SideBar.style.width = "20%";

    nav.style.width = "80%";
    count++;
  } else {
    SideBar.style.width = "0";
    nav.style.width = "100%";
    count--;
  }
});
let tbody = document.getElementById("tbody");
let UserData = JSON.parse(localStorage.getItem("allcredentials")) || [];
appender();
function appender() {
  console.log(UserData);
  let mappedData = UserData.map((item) =>
    cardMaker(item.Username, item.email, item.password)
  ).join("");
  tbody.innerHTML = mappedData;
}
function cardMaker(name, email, password) {
  let card = `
  <tr>
      <td>${name}</td>
      <td>${email}</td>
      <td>${password}</td>
  </tr>`;
  return card;
}
let cus = document.getElementById("cus");
cus.textContent = UserData.length;
console.log(cus);
