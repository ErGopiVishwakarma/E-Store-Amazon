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
let User = JSON.parse(localStorage.getItem("allcredentials")) || [];

// fetch("https://gorgeous-teal-dress.cyclic.app/order")
//   .then((res) => res.json())
//   .then((data) => {
//     appender(data);
//   });

mapping(User);
function mapping(UserData) {
  let a = UserData.map((item) => {
    return {
      username: item.Username,
      product: cookiesss(item.productPurchased),
      price: cookiesss1(item.productPurchased),
      totalPrice: cookiesss2(item.productPurchased),
    };
  });
  appender(a);
}

function cookiesss(item_productPurchased) {
  let a = item_productPurchased.map((ele, ind) => {
    return ele.productname;
  });
  return a;
}

function cookiesss1(item_productPrice) {
  let z = item_productPrice.map((item) => {
    return item.productPrice;
  });

  return z;
}
function cookiesss2(item) {
  let sum = 0;
  let z = item.map((item) => {
    return item.productPrice;
  });
  for (let i = 0; i <= z.length - 1; i++) {
    sum += z[i];
  }
  return sum;
}
function appender(UserData) {
  let a = UserData.map((item) =>
    cardMaker(item.username, item.product, item.price, item.totalPrice)
  );
  tbody.innerHTML = a.join("");
}

function cardMaker(name, productname, productprice, price) {
  let card = `
    <tr class="tr">
        <td>${name}</td>
        <td>${productname}</td>
        <td class="totalprice">${productprice}</td>
        <td>${price}</td>
    </tr>`;
  return card;
}
let tr = document.getElementsByClassName("tr");
function forPrice(data) {
  let sum = 0;
  for (let i = 0; i <= data.length - 1; i++) {
    sum += data[i];
  }
  priceMaker(sum);
}
function priceMaker(price) {
  let td = `
  <td>${price}</td>
  `;
}
