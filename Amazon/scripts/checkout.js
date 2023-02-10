var acc = document.getElementsByClassName("accordion");
var i;
let span2=document.getElementsByClassName('span2')
for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {   
   this.classList.toggle("active");
   var panel = this.nextElementSibling;
   if (panel.style.display === "block") {
     panel.style.display = "none";
     span2[0].style.color='black'
   } else {
     panel.style.display = "block";
     span2[0].style.color='orange'
   }
 });
}

//=======getting data from local storage=========
let itemCount=document.getElementById('item-count')
let delCount=document.getElementById('del-count')
let totalP=document.getElementById('total')
let proCount=document.getElementById('pro-count')
let finalVal=document.getElementById('final-value')
let gData=JSON.parse(localStorage.getItem('checkdata'))||[]
let ans=0
let dcount=40
let pro=-40
gData.forEach(element => {
    ans+=element.price
});
itemCount.innerHTML='₹ '+ans
delCount.innerHTML='₹ '+dcount
totalP.innerHTML='₹ '+((+ans)+(+dcount))
proCount.innerHTML='₹ '+pro
finalVal.innerHTML='₹ '+((+ans)+(+dcount)+(+pro))

var forCheck=""
//================================================
let btnDiv=document.getElementById('btnbtn')
let go=document.getElementById('go')
let final=document.getElementById('final')
let rightbtn=document.getElementById('rightbtn')
let topbtn=document.getElementById('topbtn')
let pan=document.getElementById('pan')
let end=document.getElementById('end')
let head=document.getElementById('head')
let mainDiv=document.getElementById('mainDiv')
let over=document.getElementById('over')
// end.addEventListener('')
topbtn.addEventListener('click',()=>{
 pan.style.display='block'
})
let a=0

function gopi(){   
    let radio=document.querySelectorAll('input[name="pay"]')
    for(let i=0; i<radio.length; i++){
        if(radio[i].checked){
            a=1
            forCheck=radio[i].value
            break
        }
    }
}


//cash part here==================

//=========================till here

rightbtn.addEventListener('click',()=>{
    gopi()
    if(a &&forCheck=='two'){
        head.style.opacity=0.3
        mainDiv.style.opacity=0.3
        end.style.display='block'
 
    }else if(a && forCheck=='one'){
        head.style.opacity=0.3
        mainDiv.style.opacity=0.3
        go.style.display='block'
    }else{
        end.style.display='none'
        go.style.display='none'
    }
})
var disname=localStorage.getItem("fordisplatName")||""
let UserData = JSON.parse(localStorage.getItem("User")) || false;
over.addEventListener('click',()=>{
    // gData.splice(0)
    // localStorage.setItem('checkdata',JSON.stringify(gData))
window.location.href='cart.html'


    if(gData&&UserData&&disname){
     console.log("its appending")
     let retunedDataFromPTOBJ=passDataToOBJ(gData,UserData,disname)
     passObjToAPI(retunedDataFromPTOBJ)
     console.log(retunedDataFromPTOBJ);
    }  
   

   
   function passDataToOBJ(gData,UserData,disname){
    var UserCredentials={}
    UserCredentials.Owner=disname
     UserData.forEach(ele=>{
       // console.log(ele)
      UserCredentials.Username=ele.name
      UserCredentials.email=ele.email
      UserCredentials.password=ele.password
     })
     let arr=[]
     let i=0;
     if(gData.length>1){
    
         // console.log(ele)
         
         addDataToInsideObj()
        function addDataToInsideObj(){
            gData.forEach(ele=>{
           while(i<gData.length){
             let multiData={
               productname:ele.title,
               productPrice:ele.price,
               productImage:ele.img
             }
             arr.push(multiData)
             i++
           }
          
           // arr.forEach((ele,ind)=>{
           // //  console.log(ele,ind)
           // })
         })
         }
         UserCredentials.productPurchased=arr
         //  console.log(arr)
     }else{
        gData.forEach(ele=>{
         // console.log(ele)
         UserCredentials.productPurchased={
           productname:ele.title,
           productPrice:ele.price,
           productImage:ele.img
         }
         })
     }
     // console.log(arr)
       // console.log(UserCredentials)
       return UserCredentials
   }
   
   
   function passObjToAPI(retunedDataFromPTOBJ){
//    fetch("https://gorgeous-teal-dress.cyclic.app/cart",{
//      method:'POST',
//     headers:{
//      "Content-Type":"application/json"
//     },
//     body: JSON.stringify(retunedDataFromPTOBJ)
//    })
   localStorage.setItem("allcredentials",JSON.stringify([retunedDataFromPTOBJ]))
   }







})
btnDiv.addEventListener('click',()=>{
    gopi()
    if(a &&forCheck=='two'){
        head.style.opacity=0.3
        mainDiv.style.opacity=0.3
        end.style.display='block'
    }else if(a && forCheck=='one'){
        head.style.opacity=0.3
        mainDiv.style.opacity=0.3
        go.style.display='block'
    }else{
        end.style.display='none'
        go.style.display='none'
    }
})

//payment popup=============function
final.addEventListener('click',()=>{
    go.style.display='none'
    // alert('your order placed successfully..')
    setTimeout(()=>{
        end.style.display='block'
    },1000)
    over.addEventListener('click',()=>{
//         gData.splice(0)
//         localStorage.setItem('checkdata',JSON.stringify(gData))
  window.location.href='cart.html'
    })
  
})

let addressData=JSON.parse(localStorage.getItem('address'))||[]
//address part here ==============================
let coName= document.getElementById('coname')
let adName= document.getElementById('address-value')
let adName1= document.getElementById('address-value1')
let pin= document.getElementById('pincode')
let streat=document.getElementById('streat')
addressData.forEach(elem=>{
    coName.innerHTML=elem.nameValue
    adName.innerHTML=elem.flatHouseValue 
    adName1.innerHTML=elem.selectAddressTypeValue
    streat.innerHTML=elem.mobileValue
    pin.innerHTML=elem.pincodeValue
})


