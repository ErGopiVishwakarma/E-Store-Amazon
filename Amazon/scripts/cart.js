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
// ---------------------------------------------------------------------------------
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
// --------------------------------------------------------------------------------------------------

   let middle=document.getElementById('middle')
let saveForLater=document.getElementById('save-item-later')
let total_price=document.getElementById('total-price')
let total_value=document.getElementById('total-value')
let total_count=document.getElementById('total-count')
let total_item=document.getElementById('total-item')
var count=0
var ans=0
let localData=JSON.parse(localStorage.getItem('addcart'))||[]
let savelaterData=JSON.parse(localStorage.getItem('savelater'))||[]
let UserData = JSON.parse(localStorage.getItem("User")) || false;
let fordisplayingMessage= document.getElementById("disMessage")
///     ================================      //////////


let toDisplayCartImage= document.getElementById("item-div")
if(UserData){
   displayAcctualItems()
}else{
   displayCartImage()
}

function displayCartImage(){
   
   toDisplayCartImage.innerHTML=`<div class="displayMessage">
   <div style="width: 100%;">
       <div style="background-color: white; padding: 40px; border-radius: 5px; display: flex; justify-content: center; align-items: center;">
          <div style="">
           <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" 
           style="width: 400px;">
          </div>
          <div style="margin-left:100px;">
               <div >
                   <h1 style="line-height: 2;">  Your Amazon Cart is empty</h1>
                   <p style="color: #30a2b6;">Shop today’s deals</p>
               </div>
               <div style="display: flex; margin-top: 50px;">
                <a href="./SignIn.html" style="color: black; text-decoration: none; text-align: center;">  <div style=" cursor: pointer;"> <p style=" border: 1px solid orange;width: 200px; padding: 10px; background-color: orange; border-radius: 20px;">Sign in to your account</p></div></a>
                   <a href="./SiginUpPage.html" style="color: black; text-decoration: none;"><div style="padding-left:40px; text-align: center; cursor: pointer;" ><p style=" border: 1px solid  rgb(202, 200, 194); padding: 10px; text-align: center; background-color: white; border-radius: 20px;">Sign Up Now</p></div></a>
               </div>
          </div>
       </div>
   </div>
</div>
`
}

let by=[]

let checkData=JSON.parse(localStorage.getItem('checkdata'))||[]

function displayAcctualItems(){
   
let midText=document.createElement('p')
midText.setAttribute('id','mid-text')
fordisplayingMessage.innerHTML='Shopping Cart'
middle.append(midText)

window.addEventListener('load',()=>{
  showData(localData)
})
showData(localData)
function showData(arrData){

   middle.innerHTML=''
  
   arrData.forEach((elem,ind)=> {
   //   ans+=elem.price;
   //   total_price.innerHTML="₹ "+ans+".00"
   //   total_value.innerHTML="₹ "+ans+".00"
   //   count++
   //   total_count.innerHTML=count
   //   total_item.innerHTML=count
     


       let main=document.createElement('div')
       //for first 
       let first=document.createElement('div')
       first.setAttribute('class','first')
       let checkbox=document.createElement('input')
       checkbox.setAttribute('type','checkbox')
       checkbox.setAttribute('id','checkbox')
       checkbox.setAttribute("class","please")
       //new part added========
        checkbox.addEventListener('change', (event) => {
         if (event.currentTarget.checked) {
            checkData=JSON.parse(localStorage.getItem('checkdata'))||[]
            checkData.push(elem)
            localStorage.setItem('checkdata',JSON.stringify(checkData))
            count=0
            ans=0
            checkData.forEach(element=>{
                       ans+=element.price;
                       total_price.innerHTML="₹ "+ans+".00"
                       total_value.innerHTML="₹ "+ans+".00"
                       count++
                       total_count.innerHTML=count
                       total_item.innerHTML=count
                     })
                         if(checkData.length==0){
         //   middle.append(midText)
           count=0
           ans=0
           total_count.innerHTML=count
           total_item.innerHTML=count
           total_price.innerHTML="₹ "+ans+".00"
           total_value.innerHTML="₹ "+ans+".00"
        }
           
         } else {
            checkData=JSON.parse(localStorage.getItem('checkdata'))||[]
            checkData.splice(ind,1)    
            localStorage.setItem('checkdata',JSON.stringify(checkData))
            count=0
            ans=0
            checkData.forEach(element=>{
               ans+=element.price;
               total_price.innerHTML="₹ "+ans+".00"
               total_value.innerHTML="₹ "+ans+".00"
               count++
               total_count.innerHTML=count
               total_item.innerHTML=count
            })
           if(checkData.length==0){
         //   middle.append(midText)
           count=0
           ans=0
           total_count.innerHTML=count
           total_item.innerHTML=count
           total_price.innerHTML="₹ "+ans+".00"
           total_value.innerHTML="₹ "+ans+".00"
        }

         }
         })  
         //new end here======================       
       first.append(checkbox)
       //for second
       let second=document.createElement('div')
       second.setAttribute('class','second')
       let imgSe=document.createElement('img');
       imgSe.setAttribute('src',elem.img)
       second.append(imgSe)
       // for third
       let third=document.createElement('div')
       third.setAttribute('class','third')
       let h2Name=document.createElement('h2')
       h2Name.innerHTML=elem.title
       let pInStock=document.createElement('p')
       pInStock.setAttribute('id','instock')
       pInStock.innerHTML='In Stock'
       let p=document.createElement('p')
       p.innerHTML='Eligible for FREE Shipping'
       let thirdImg=document.createElement('img')
       thirdImg.setAttribute('src','https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png')
       let thirdCheckDiv=document.createElement('div')
       let thirdCheckDivInput=document.createElement('input')
       thirdCheckDivInput.setAttribute('type','checkbox')
       let span=document.createElement('span')
       span.innerHTML='this will be a gift'
       let spanA=document.createElement('a')
       spanA.innerHTML='learn more'
       span.append(spanA)
       thirdCheckDiv.append(thirdCheckDivInput,span)

       let buttonDiv=document.createElement('div')
       let button=document.createElement('button')
       button.innerHTML='Qua:'
       let select=document.createElement('select')
       let option1=document.createElement('option')
       option1.innerHTML='1'
       let option2=document.createElement('option')
       option2.innerHTML='2'
       let option3=document.createElement('option')
       option3.innerHTML='3'
       let option4=document.createElement('option')
       option4.innerHTML='4'
       let option5=document.createElement('option')
       option5.innerHTML='5'
       select.append(option1,option2,option3,option4,option5)
       let aN=document.createElement('a')
       aN.innerHTML='delete'                       //delete functionalities from here to
       aN.addEventListener('click',(e)=>{
         //new 
         e.preventDefault()
         checkData.splice(ind,1) 
         localStorage.setItem('checkdata',JSON.stringify(checkData))
         //==============================
         count=0
         ans=0
         checkData.forEach(element=>{
            ans+=element.price;
            total_price.innerHTML="₹ "+ans+".00"
            total_value.innerHTML="₹ "+ans+".00"
            count++
            total_count.innerHTML=count
            total_item.innerHTML=count
         })
        if(checkData.length==0){
      //   middle.append(midText)
        count=0
        ans=0
        total_count.innerHTML=count
        total_item.innerHTML=count
        total_price.innerHTML="₹ "+ans+".00"
        total_value.innerHTML="₹ "+ans+".00"
     }
         //=============================
        localData.splice(ind,1)
        localStorage.setItem('addcart',JSON.stringify(localData))
        showData(localData)

      //   if(localData.length==0){
      //      middle.append(midText)
      //      count=0
      //      ans=0
      //      total_count.innerHTML=count
      //      total_item.innerHTML=count
      //      total_price.innerHTML="₹ "+ans+".00"
      //      total_value.innerHTML="₹ "+ans+".00"
      //   }
       })                                             //==========  till here
       let aN1=document.createElement('a')
       aN1.innerHTML='save for later'
       aN1.addEventListener('click',(e)=>{           //save later funcitonalities from here
         e.preventDefault()
         checkData.splice(ind,1) 
         localStorage.setItem('checkdata',JSON.stringify(checkData))
         //==============================
         count=0
         ans=0
         checkData.forEach(element=>{
            ans+=element.price;
            total_price.innerHTML="₹ "+ans+".00"
            total_value.innerHTML="₹ "+ans+".00"
            count++
            total_count.innerHTML=count
            total_item.innerHTML=count
         })
        if(checkData.length==0){
      //   middle.append(midText)
        count=0
        ans=0
        total_count.innerHTML=count
        total_item.innerHTML=count
        total_price.innerHTML="₹ "+ans+".00"
        total_value.innerHTML="₹ "+ans+".00"
     }
         //=============================
        savelaterData.push(elem)
        localStorage.setItem('savelater',JSON.stringify(savelaterData))
        localData.splice(ind,1)
        localStorage.setItem('addcart',JSON.stringify(localData))
        showData(localData)
        saveData(savelaterData)
      //   if(localData.length==0){
      //      middle.append(midText)
      //      count=0
      //      ans=0
      //      total_count.innerHTML=count
      //      total_item.innerHTML=count
      //      total_price.innerHTML="₹ "+ans+".00"
      //      total_value.innerHTML="₹ "+ans+".00"
      //   }
       })                                       //  ===till here
       let aN2=document.createElement('a')
       aN2.innerHTML='see more like this'
       button.append(select)
       buttonDiv.append(button,aN,aN1,aN2)
       

       third.append(h2Name,pInStock,p,thirdImg,thirdCheckDiv,buttonDiv)

       //for forth div
       let forth=document.createElement('div')
       forth.setAttribute('class','forth')
       let h3forth=document.createElement('h3')
       h3forth.innerHTML="₹ "+elem.price+".00"
       forth.append(h3forth)

       //final appending data
       main.append(first,second,third,forth)
       middle.append(main)
   });
}
//for checking part 
// let please=document.getElementsByClassName('please')
// console.log(please)
// for(let e of please){
//    e.addEventListener('click',(ed)=>{
//       console.log('cikckc')
//    if(ed.target.value==checked){
//       console.log('hii')
//       ans+=elem.price;
//       total_price.innerHTML="₹ "+ans+".00"
//       total_value.innerHTML="₹ "+ans+".00"
//       count++
//       total_count.innerHTML=count
//       total_item.innerHTML=count
//    }
//    })
//    // if(echecked){
//    //    console.log('click')
      
//    //     }
//    }

let proceed=document.getElementById('proceed-button')
proceed.addEventListener('click',()=>{
       window.location.href='address.html'
})

//function for save for later data
let counter=document.getElementById('counter')
let store=0
saveData(savelaterData)

function saveData(itemData){
  saveForLater.innerHTML=''
  store=0
  itemData.forEach((element,index)=>{
     store++
     counter.innerHTML=store
     let main=document.createElement('div')
     main.setAttribute('id','outer')
     let div=document.createElement('div')
     let firstImage=document.createElement('img')
     firstImage.setAttribute('class','img')
     firstImage.setAttribute('src',element.img)
     let nameh3=document.createElement('h3')
     nameh3.innerHTML=element.title
     let priceh4=document.createElement('h4')
     priceh4.innerHTML="₹ "+element.price
     let logoImg=document.createElement('img')
     logoImg.setAttribute('src','https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png')
     let button=document.createElement('button')
     button.innerHTML='Move to cart'
     button.addEventListener('click',(e)=>{ //move cart functionalities==========
            e.preventDefault()
            localData.push(element)
            localStorage.setItem('addcart',JSON.stringify(localData))
            savelaterData.splice(index,1)
            localStorage.setItem('savelater',JSON.stringify(savelaterData))
            saveData(savelaterData)
            showData(localData)
            if(savelaterData.length==0){
              store=0
              counter.innerHTML=store
           }
     })
     let aDiv=document.createElement('div')
     let del=document.createElement('a')
     del.innerHTML='delete'
     del.addEventListener('click',(e)=>{  //delete cart functionalities ==================
         e.preventDefault()
        savelaterData.splice(index,1)
        localStorage.setItem('savelater',JSON.stringify(savelaterData))
        saveData(savelaterData)
        if(savelaterData.length==0){
           store=0
           counter.innerHTML=store
        }
     })
     let savefor=document.createElement('a')
     savefor.innerHTML='add to list'
     let seemore=document.createElement('a')
     seemore.innerHTML='see more like this'
     aDiv.append(del,savefor,seemore)
     div.append(firstImage,nameh3,priceh4,logoImg,button,aDiv)
     main.append(div)
     saveForLater.append(main)
})
}



//===================accordion==================

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {   
   this.classList.toggle("active");
   var panel = this.nextElementSibling;
   if (panel.style.display === "block") {
     panel.style.display = "none";
   } else {
     panel.style.display = "block";
   }
 });
}


}

// ----------------------------

// ===================to=show=the=quantities============================================================
// let localData=JSON.parse(localStorage.getItem('addcart'))||[]
let displayCount=document.getElementById("displayCount")
  displayCount.textContent=localData.length