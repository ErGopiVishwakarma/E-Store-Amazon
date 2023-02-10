let burger = document.getElementById("burger");
let SideBar = document.getElementById("sideBar");
let nav = document.getElementById("nav");
let container = document.getElementById("container");
let DashBoardDiv = document.getElementById("DashBoardDiv");

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
//Insert Graph
// ist chart
DashBoardDiv.innerHTML = ProductsForm();

function ProductsForm() {
  let form = `  
  <div id="formContainer">
  <div id="heading">
  <h3>Add Products</h3>
  </div>
   <form id="form">
         <div class=formdiv>
          <label class="label">  Title </label>
           <input type="text" id="title" placeholder=" please type the title" class="inp" required/>
        </div>
        <div class=formdiv>
        <label class="label">  Description </label>
         <input type="text" placeholder=" please type the description" class="inp" id="desc" required/>
      </div>
      <div class=formdiv>
      <label class="label">  Image URL </label>
       <input type="url" placeholder=" please type the Image Url" class="inp"id="imageURL" required/>
    </div>
    <div class=formdiv>
    <label class="label"> Price </label>
     <input type="text" placeholder=" please type the Price in rupees" class="inp" id="price" required/>
  </div>
  <div class=formdiv>
  <label class="label"> Category</label>
  <select id="select">
    <option value="">Select Category</option>
    <option value="electronics">  Mobiles,Computers</option>
    <option value="MenClothes">Men's fashion</option>
    <option value="WomenClothes">Womens's fashion</option>
    <option value="">Beauty,Health,Grocery</option>
  </select>
</div>
<div class=formdiv>
 <input type="submit" value="Publish On site" id="sub"/>
</div>
 </form>
  </div>

  `;
  return form;
}
// Products
let form = document.getElementById("form");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let imageURL = document.getElementById("imageURL");
let price = document.getElementById("price");
let category = document.getElementById("select");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    title: title.value,
    description: desc.value,
    image: imageURL.value,
    price: price.value,
    category: category.value,
  };

  // storeData(obj);
  local(obj);
  alert("Product Added");
  title.value = null;
  desc.value = null;
  imageURL.value = null;
  price.value = null;
});
//
// For API
function storeData(Product) {
  let url = "https://gorgeous-teal-dress.cyclic.app/productdata";
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Product),
  });
}
// For Local Storage
let ProductsData = JSON.parse(localStorage.getItem("Products")) || [];
function local(obj) {
  ProductsData.push(obj);
  localStorage.setItem("Products", JSON.stringify(ProductsData));
}
