let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let UserData = JSON.parse(localStorage.getItem("User")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (chkuser()) {
    alert("Already Registered");
  } else {
    SaveUserData();
  }
});

function chkuser() {
  let flag = false;
  UserData.forEach((element) => {
    if (element.email == email.value) {
      flag = true;
    }
  });
  return flag;
}

function SaveUserData() {
  if (passchk(pass.value)) {
    let obj = {
      name: name.value,
      email: email.value,
      password: pass.value,
    };
    UserData.push(obj);
    localStorage.setItem("User", JSON.stringify(UserData));
    alert("Registeration Sucessfull");
    window.location.href = "./signIn.html";
  } else {
    alert("Password Should be more than 8 character");
  }
}

function passchk(password) {
  let count = 0;
  for (let i = 0; i <= password.length - 1; i++) {
    count++;
  }
  if (count >= 8) {
    return true;
  } else {
    // alert("Type Valid Password");
    return false;
  }
}
