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
// ==================================shakambari code starts from here=================================================
let productDatas=[]

let data = JSON.parse(localStorage.getItem('prod_display'))||[]
 display_card(data)
function display_card(data)
{
    let div1=document.createElement('div')
    div1.setAttribute("class","block_1")
    div1.setAttribute("id","block_1")
    let image= document.createElement('img')
    image.setAttribute("src", `${data.img}`)
    div1.append(image)
    let div2=document.createElement('div')
    div2.setAttribute("class","block_2")
    div2.setAttribute("id" , "block_2")
    let title = document.createElement("h3")
    title.setAttribute("id" , "title")
    title.innerText=`${data.title}`
    let div3=document.createElement("div")
    div3.setAttribute("class" , "rating")
    let star=document.createElement("i")
    star.setAttribute("id", "star")
 
    let span1 = document.createElement("span")
    span1.setAttribute("class","fa fa-star checked") 

    let span2 = document.createElement("span")
    span2.setAttribute("class","fa fa-star checked") 

    let span3 = document.createElement("span")
    span3.setAttribute("class","fa fa-star checked") 

    let span4 = document.createElement("span")
    span4.setAttribute("class","fa fa-star checked") 

    let span5 = document.createElement("span")
    span5.setAttribute("class","fa fa-star-o") 
      
    star.append(span1,span2,span3,span4,span5)

    let p1=document.createElement("p")
    p1.setAttribute("id","rating")
    span1=document.createElement("span")
    span1.innerText="28,266 ratings"
    p1.append(span1)
    let p2=document.createElement("p")
    p2.setAttribute("id" , "answered")
    p2.innerText="1000+ answered questions"

    div3.append(star,p1,p2)
    div2.append(title,div3)

    let hr1 = document.createElement("hr")
    

    let div4=document.createElement("div")
    div4.setAttribute("class", "price")
    let price=document.createElement("h3")
    price.setAttribute("id", "price")
    price.innerText=`Rs.${data.price}`
    let p3=document.createElement("p")
    p3.innerText="Inclusive of all taxes"
    let p4=document.createElement("p")
    p4.innerText="EMI starts at ₹1,672. No Cost EMI available EMI options"
    
    div4.append(price,p3,p4)
    let hr2 =document.createElement("hr")

    let div5 = document.createElement("div")
    div5.setAttribute("class","offer")
    let offer = document.createElement("h3")
    offer.innerText="Offer"

    let div21=document.createElement("div")
    div21.setAttribute("id","order_div")
    let div6=document.createElement("div")
    let p5=document.createElement("p")
    p5.innerText="No Cost EMI"
    let p6=document.createElement("p")
    p6.innerText="Upto ₹1,480.21 EMI interest savings on select Credit CardsUpto ₹1,480.21 EMI interest savings on select Credit Cards"
    div6.append(p5,p6)

    let div7=document.createElement("div")
    let p7=document.createElement("p")
    p7.innerText="No Cost EMI"
    let p8=document.createElement("p")
    p8.innerText="Upto ₹1,480.21 EMI interest savings on select Credit CardsUpto ₹1,480.21 EMI interest savings on select Credit Cards"
    div7.append(p7,p8)

    let div8=document.createElement("div")
    let p9=document.createElement("p")
    p9.innerText="No Cost EMI"
    let p10=document.createElement("p")
    p10.innerText="Upto ₹1,480.21 EMI interest savings on select Credit CardsUpto ₹1,480.21 EMI interest savings on select Credit Cards"
    div8.append(p9,p10)
  
    div21.append(div6,div7,div8)
    div5.append(offer,div21)
    let hr3=document.createElement("hr")
    div2.append(title,div3,hr1,div4,hr2,div5,hr3)


    let div9=document.createElement("div")
    div9.setAttribute("id","block_3")
    div9.setAttribute("class","block_3")


    let div10=document.createElement("div")
    div10.setAttribute("id","block_3a")


    let div11=document.createElement("div")
    div11.setAttribute("id","exchange")
    let input1=document.createElement("input")
    input1.setAttribute("type","radio")
    let div12=document.createElement("div")
    let p11=document.createElement("p")
    p11.setAttribute("id","radio1")
    p11.innerText="With Exchange"
    let p12=document.createElement("p")
    p12.setAttribute("id","radio2")
    p12.innerText="Get upto 1960 off"
    div12.append(p11,p12)
    div11.append(input1 , div12)


    let div20=document.createElement("div")
    div20.setAttribute("id","new_exchange")
    let input2=document.createElement("input")
    input2.setAttribute("type","radio")
    let div13=document.createElement("div")
    let p13=document.createElement("p")
    p13.setAttribute("id","new_radio1")
    p13.innerText="Without Exchange"
    let p14=document.createElement("p")
    p14.setAttribute("id","new_radio2")
    p14.innerText="Sold by Appario Retail Private Ltd and Fulfilled by Amazon."
    div13.append(p13,p14)
    div20.append(input2 , div13)

    div10.append(div11,div20)
    let div14 = document.createElement("div")
    let btn1=document.createElement("button")
    btn1.setAttribute("id", "add_to_cart")
    btn1.innerText = "Add to Cart"
 
    btn1.addEventListener("click", ()=>
   {
    localData.push(data)
     localStorage.setItem("addcart", JSON.stringify(localData))
    //  edited********************************************************************************************
    console.log("button is working")
      window.location.reload("./individualproduct.html")
     
     })

    let btn2= document.createElement("button")
    btn2.setAttribute("id","buy_now")
    btn2.innerText = "Buy Now"
 
    btn2.addEventListener("click", ()=>
   {
     localStorage.setItem("checkdata", JSON.stringify(data))
     window.location.href="./checkout.html" 
    })

    div14.append(btn1,btn2)
    div9.append(div10,div14)
    // let card = document.createElement("div")
    // card.append()

    let block=document.querySelector(".block")
       block.append(div1,div2,div9)
}
// ========================logOut functionality============================================================
let logoutbtn= document.getElementById("logout-1")
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
    savelater:savelater,
    userloginCredentials:User

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

