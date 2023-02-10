const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    loop: true,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });   

  const swiper1 = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    }
  });

  // function hoveringOn(){
  //   leftarrow.style.display="block"
  //   rightarrow.style.display="block"
  // }
  // function hoverOff(){
  //   leftarrow.style.display="none"
  //   // leftarrow.style.transitionDelay="2s"
  //   rightarrow.style.display="none"
  //   // rightarrow.style.transitionDelay="all 10s"
  // }

  

// ----------------------section6------sliding------code---Starts--------------------------------
let leftarrow6=document.getElementById("chevon-left")
let rightarrow6=document.getElementById("chevon-right")
let section6=document.getElementById("swiper-wapper-section-6")

var sectionIndex_6=0;
rightarrow6.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_6=(sectionIndex_6<2.5)?sectionIndex_6+1:3;

  section6.style.transform='translate('+ (sectionIndex_6)*-52+'%)'
})
leftarrow6.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_6=(sectionIndex_6>0)?sectionIndex_6-1:0;
  section6.style.transform='translate('+ (sectionIndex_6)*-52+'%)'
})
// ----------------------section6------sliding------code---ends--------------------------------


// ----------------------section7------sliding------code---Starts--------------------------------
let leftarrow7=document.getElementById("chevon-left-7l")
let rightarrow7=document.getElementById("chevon-right-7r")
let section7=document.getElementById("swiper-wapper-section-7")

var sectionIndex_7=0;
rightarrow7.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_7=(sectionIndex_7<2.5)?sectionIndex_7+1:3;

  section7.style.transform='translate('+ (sectionIndex_7)*-42+'%)'
})
leftarrow7.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_7=(sectionIndex_7>0)?sectionIndex_7-1:0;
  section7.style.transform='translate('+ (sectionIndex_7)*-42+'%)'
})
// ----------------------section7------sliding------code---ends--------------------------------


// ----------------------section5------sliding------code---Starts--------------------------------
let leftarrow5=document.getElementById("chevon-left-5l")
let rightarrow5=document.getElementById("chevon-right-5r")
let section5=document.getElementById("swiper-wapper-section-5")

var sectionIndex_5=0;
rightarrow5.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_5=(sectionIndex_5<2.5)?sectionIndex_5+1:3;

  section5.style.transform='translate('+ (sectionIndex_5)*-68+'%)'
})
leftarrow5.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_5=(sectionIndex_5>0)?sectionIndex_5-1:0;
  section5.style.transform='translate('+ (sectionIndex_5)*-68+'%)'
})
// ----------------------section5------sliding------code---ends--------------------------------

// ----------------------section10------sliding------code---Starts--------------------------------
let leftarrow10=document.getElementById("chevon-left-10l")
let rightarrow10=document.getElementById("chevon-right-10r")
let section10=document.getElementById("swiper-wapper-section-10")

var sectionIndex_10=0;
rightarrow10.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_10=(sectionIndex_10<3)?sectionIndex_10+1:3;

  section10.style.transform='translate('+ (sectionIndex_10)*-24+'%)'
})
leftarrow10.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_10=(sectionIndex_10>0)?sectionIndex_10-1:0;
  section10.style.transform='translate('+ (sectionIndex_10)*-24+'%)'
})
// ----------------------section10------sliding------code---ends--------------------------------


// ----------------------section13------sliding------code---Starts--------------------------------
let leftarrow13   =document.getElementById("chevon-left-13l")
let rightarrow13=document.getElementById("chevon-right-13r")
let section13=document.getElementById("swiper-wapper-section-13")

var sectionIndex_13=0;
rightarrow13.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_13=(sectionIndex_13<3)?sectionIndex_13+1:3;

  section13.style.transform='translate('+ (sectionIndex_13)*-24+'%)'
})
leftarrow13.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_13=(sectionIndex_13>0)?sectionIndex_13-1:0;
  section13.style.transform='translate('+ (sectionIndex_13)*-24+'%)'
})
// ----------------------section13------sliding------code---ends--------------------------------

// ----------------------section14------sliding------code---Starts--------------------------------
let leftarrow14   =document.getElementById("chevon-left-14l")
let rightarrow14=document.getElementById("chevon-right-14r")
let section14=document.getElementById("swiper-wapper-section-14")

var sectionIndex_14=0;
rightarrow14.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_14=(sectionIndex_14<3)?sectionIndex_14+1:3;

  section14.style.transform='translate('+ (sectionIndex_14)*-18+'%)'
})
leftarrow14.addEventListener("click",()=>{
  // console.log(event.button)
  sectionIndex_14=(sectionIndex_14>0)?sectionIndex_14-1:0;
  section14.style.transform='translate('+ (sectionIndex_14)*-18+'%)'
})
// ----------------------section14------sliding------code---ends--------------------------------

// ---------------------searching functionality-----------------------
let search=document.getElementById("input-bar")
let body= document.getElementById("mainBody")
search.addEventListener("input",()=>{
  body.style.border="orange"
})

// ---------------------sigin- In  hovering code---------------------------

let mouseHover=document.getElementById("Signinghover")

function show(){
  mouseHover.style.display="block"
  mouseHover.style.transition="all 2s"
}
function hide(){
  mouseHover.style.display="none"
  mouseHover.style.transition="all 2s"
}
// ----------------displayName---Next---to--hello-----------------------------------------------------------------
let disname=localStorage.getItem("fordisplatName")||""
let displayUserName= document.getElementById("disname")
let display_Name=document.getElementById("displayName")
if(disname!==""){
  displayUserName.innerText=disname
  display_Name.textContent=disname
}else{
  display_Name.textContent="sign in"
}

// ===================to=show=the=quantities============================================================
let localData=JSON.parse(localStorage.getItem('addcart'))||[]
let displayCount=document.getElementById("displayCount")
  displayCount.textContent=localData.length


// ============================Search==Functionality=======================================================================================================

let productData = JSON.parse(localStorage.getItem("prod_display"))||[]

let suggestionData=["mobiles","shoes","tempered glass","headphones","laptops","motor","simcar tray", "keyboard","samsung","hp laptop","hp", "earphone",
"monitor", "mouse", "laptopscreen","clothes", "shirt", "dress", "pant","adidas","puma","sandals","Ram", "hardisk","photo frame","camera","Apple","hp","lenovo","frontdesk",
"cup","light","bulb","speaker","Redmi","Oppo","Realme","MI","tubelight","hanger","rope","webcamera","mobilesphone"]


let sortedSuggestionData=suggestionData.sort();
console.log(sortedSuggestionData)
console.log("its working")
let input=document.getElementById("input-bar")

input.addEventListener("keyup",(e)=>{
  console.log("input part is working")
  for(let i of sortedSuggestionData){
    removeElements();
    console.log(i)
    if(i.toLowerCase().startsWith(input.value.toLowerCase())&&input.value!=""){
      let listItem =document.createElement("li")
      listItem.classList.add("list-items")
      listItem.style.cursor="pointer"
      listItem.setAttribute("onclick","displaynames('"+ i + "')")
      let word =  '<b>'+i.substring(0, input.value.length)+'</br>'
      word+=i.substring(input.value.length)
      listItem.innerHTML=word;
      document.querySelector(".list").appendChild(listItem) 
    }
  }
})

function displayname(value){
  input.value=value;
}

function removeElements(){
  let items =document.querySelectorAll(".list-items");
  items.forEach((item)=>{
    item.remove();
  })
}
// ========================logOut functionality============================================================
let logoutbtn= document.getElementById("logout")
let addressData=JSON.parse(localStorage.getItem('address'))||[]
let gData=JSON.parse(localStorage.getItem('checkdata'))||[]
let savelaterData=JSON.parse(localStorage.getItem('savelater'))||[]
let UserData = JSON.parse(localStorage.getItem("User")) || false;
var locstrg=JSON.parse(localStorage.getItem("allUserDatas"))
var userDataArr=[];

logoutbtn.addEventListener("click",()=>{
  console.log("logout button is working")
  var allUserData={
    owner:disname,
    fordisplayingNames:disname,
    localDatas:localData,
    productDatas:productData,
    useraddress:addressData,
    checkoutData:gData,
    savelater:savelaterData,
    userloginCredentials:UserData

  }

  userDataArr.push(allUserData)

console.log(userDataArr)
  // console.log(allUserData.productDatas)
 localStorage.setItem("allUserDatas",JSON.stringify(userDataArr))
refreshData(locstrg)

})

function refreshData(locstrg){
 if(locstrg){
  window.localStorage.removeItem('fordisplatName');
  window.localStorage.removeItem('addcart');
  window.localStorage.removeItem('address');
  window.localStorage.removeItem('checkdata');
  window.localStorage.removeItem('prod_display');
  window.localStorage.removeItem('savelater');
  window.location.href="./index.html"
 }
}



