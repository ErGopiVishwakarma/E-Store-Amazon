let form = document.getElementById("form");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let UserData = JSON.parse(localStorage.getItem("User")) || false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(UserData==false){
    alert("Please Sign Up")
  }else if (loger()) {
    alert("Login Successull");
  } else {
    alert("Wrong Password");
  }
   
});
console.log(UserData)
function loger() {
  if(UserData==null){
   return false
  }


  let flag = false;
  UserData.forEach((element) => {
    
    if (element.email == email.value && element.password == pass.value) {
      flag = true;
      window.localStorage.setItem("fordisplatName",`${element.name}`);
      window.location.href="./index.html"
    }
  });
  if(flag==true){
    window.localStorage.setItem("fordisplatName",`${element.name}`);
  }
  return flag;
}
