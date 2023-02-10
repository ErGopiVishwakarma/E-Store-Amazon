let form = document.getElementById("form");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let admin = {
  email: "admin@amazon.com",
  password: "admin",
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value == admin.email && pass.value == admin.password) {
    console.log("Login Successful");
    window.location.href = "./dashboard.html";
  } else {
    alert("Type Your Correct Credentials");
  }
});
