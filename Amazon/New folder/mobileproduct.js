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


//   ===========================shakambari code===========================================================================

    let product_data=[]
     fetch("https://gorgeous-teal-dress.cyclic.app/mobile")
     .then((res)=>
     {
        return res.json()
     })
     .then((data)=>
     {
         
         product_data= data
         displayCard(data)
     })
    //   displayCard()
    function displayCard(data)
    {
        product_div.innerHTML = []
        data.forEach((ele)=>{

        let product_div=document.getElementById("product_div");
        let product_card=document.createElement("div");
        product_card.setAttribute("id", "product_card");


        let product_image=document.createElement("div");
        product_image.setAttribute("id", "product_image");

        let img=document.createElement("img")
        img.src=ele.img

        product_image.append(img)

        let sale=document.createElement("span")
        sale.setAttribute("id", "sale")
        sale.innerText="Republic Day Sale"

        let price=document.createElement("h3")
        price.setAttribute("id", "price")
        price.innerText=`₹${ele.price}`

        let product_desc= document.createElement("div")
        product_desc.setAttribute("id", "product_desc")

        let product_name= document.createElement("h4")
        product_name.innerText=ele.title

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

        let time=document.createElement("p")
        time.setAttribute("id", "time")
        time.innerText="Get it as soon as"

        let span_time=document.createElement("span")
        span_time.innerText="Today 4 PM - 8 PM"

        time.append(span_time)

        let delivery=document.createElement("p") 
        delivery.setAttribute("id", "time")
        delivery.innerText="FREE Delivery by Amazon"

        let alexa =document.createElement("p")
        alexa.setAttribute("id", "time")
        alexa.innerText="Alexa Built-in"

        let service =document.createElement("p")
        service.setAttribute("id", "time")
        service.innerText="Available Services: Device Set-up"

        product_desc.append(product_name,star,price,sale,time,delivery,alexa,service)
        product_card.append(product_image,product_desc)

        product_card.addEventListener("click",()=>
        {
            // consoel.log(obj)
            localStorage.setItem("prod_display",JSON.stringify(ele))
            window.location.href="./individualproduct.html"
        })
         
        product_div.append(product_card)
        })
    }
   

    document.getElementById("sort").addEventListener("change", ()=>
    {
        if(document.getElementById("sort").value=="asc")
        {
             fetch("https://gorgeous-teal-dress.cyclic.app/mobile?_sort=price&_order=asc")
             .then((res)=>
             {
                  return res.json()
             })
             .then((data)=>
             {
                   console.log(data)
                   displayCard(data)
             })
        }
        else if(document.getElementById("sort").value=="dsc")
        {
            fetch("https://gorgeous-teal-dress.cyclic.app/mobile?_sort=price&_order=desc")
             .then((res)=>
             {
                  return res.json()
             })
             .then((data)=>
             {
                   console.log(data)
                   displayCard(data)
             })
        }
        
    })

    document.getElementById("40-50").addEventListener("click", ()=>
    {
        let filter_array4=[]
        if(product_data && product_data.length)
        {
            for(let ele of product_data)
            {
                if(ele.price>4000 && ele.price<=5000)
                {
                    filter_array3.push(ele)
                }
                displayCard(filter_array3)
            }
           
        }
    })
    document.getElementById("over_50").addEventListener("click", ()=>
    {
        let filter_array5=[]
        if(product_data && product_data.length)
        {
            for(let ele of product_data)
            {
                if(ele.price>5000)
                {
                    filter_array5.push(ele)
                }
                displayCard(filter_array5)
            }
           
        }
    })

    document.getElementById("20-40").addEventListener("click", ()=>
    {
        let filter_array3=[]
        if(product_data && product_data.length)
        {
            for(let ele of product_data)
            {
                if(ele.price>2000 && ele.price<=4000)
                {
                    filter_array3.push(ele)
                }
                displayCard(filter_array3)
            }
           
        }
    })
    document.getElementById("15-20").addEventListener("click", ()=>
    {
        let filter_array2=[]
        if(product_data && product_data.length)
        {
            for(let ele of product_data)
            {
                if(ele.price>1500 && ele.price<=2000)
                {
                    filter_array2.push(ele)
                }
                displayCard(filter_array2)
            }
           
        }
    })
    document.getElementById("under_15").addEventListener("click", ()=>
    {
        let filter_array1=[]
        if(product_data && product_data.length)
        {
            for(let ele of product_data)
            { if(ele.price<=1500)
                {
                    filter_array1.push(ele)
                }
                    displayCard(filter_array1)
            }
       }
    })

    document.getElementById("go_btn").addEventListener("click", ()=>
    {

        
        if(product_data && product_data.length)
        {
        let max = document.getElementById("max").value
        let min = document.getElementById("min").value
        console.log(max,min)
        let filter_array6=[]
            
            for(let ele of product_data)
            { 
                if(ele.price>=min && ele.price<=max)
                {
                    filter_array6.push(ele)
                }
            }
                if(filter_array6.length)
                {
                    displayCard(filter_array6)
                    console.log(filter_array6)
                }
                else
                {
                    displayCard(product_data)

                }
       }
    })



    // *************pagination**************************** 
    let urlTodosBase="https://gorgeous-teal-dress.cyclic.app/mobile"
let totalPage;
let item;
let pagination_wrapper= document.getElementById("pagination-wrapper")
window.addEventListener('load',()=>{
  fetchFunctionTOServer(`?_limit=5&_page=1`)
})
//showing data in html window
function fetchFunctionTOServer(queryParaMeter=null){
  fetch(`${urlTodosBase}${queryParaMeter?queryParaMeter:''}`)
  .then((res)=>{
    item=res.headers.get('X-Total-Count')
    totalPage=+Math.ceil(item/5)
    console.log(item,totalPage)
    paginationFunction(totalPage)
    return res.json()
   
  }).then((data)=>{
    displayCard(data)
  })
}

function paginationFunction(noOfPages){////////////////////////////
  function buttonMaker(pageNo){
    let arr=[]
    for(let i=1; i<=pageNo; i++){
      arr.push(getButton(i))
    }
    return arr.join('')
  }
  console.log(buttonMaker(noOfPages))
 pagination_wrapper.innerHTML  =`
  <div>
  ${buttonMaker(noOfPages)}
  </div>
  `


  let forButtonClick=document.querySelectorAll('.pagination-button')
  for(let item of forButtonClick){
    item.addEventListener('click',(e)=>{
      let dataId=e.target.dataset.id
      fetchFunctionTOServer(`?_limit=5&_page=${dataId}`)
    })
  }
}
//creating button function
function getButton(pageNo){
return `<button class="pagination-button" data-id="${pageNo}">${pageNo}</button>`
}


// ========================logOut functionality============================================================
let logoutbtn= document.getElementById("logout")
var locstrg=JSON.parse(localStorage.getItem("allUserDatas"))
var userDataArr=[];

logoutbtn.addEventListener("click",()=>{
  console.log("logout button is working")
  var allUserData={
    owner:disname,
    fordisplayingNames:disname,
    localDatas:localData,
    productDatas:productData
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
  window.localStorage.removeItem('prod_display');
 
  window.location.href="./index.html"
 }
}