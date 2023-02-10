// all error variable here 
let nameErr=document.getElementById('nameErr')
let numberErr=document.getElementById('numberErr')
let pinErr=document.getElementById('pinErr')
let addErr=document.getElementById('addErr')
let areaErr=document.getElementById('areaErr')
let checkErr=document.getElementById('checkErr')


var Name =document.getElementById('name') 
var mobile =document.getElementById('mobile') 
var pincode =document.getElementById('pincode')
var flatHouse =document.getElementById('flatHouse')
var areaStreat =document.getElementById('areaStreat')
var city =document.getElementById('city')
let selectAddressType=document.getElementById('select')
var checkbox =document.getElementById('checkbox')
let button=document.getElementById('button')

var nameValue,mobileValue,pincodeValue,flatHouseValue,areaStreatValue,cityValue,selectAddressTypeValue;
// cityValue=city.value
selectAddressTypeValue=selectAddressType.value

button.addEventListener('click',(e)=>{
    e.preventDefault()
    addressValidate()
})

function addressValidate(){
    let flag=false, sign=1,count=0;
    if(Name.value.length=='' && Name.value.length<4){
        sign=0
        count++
        nameErr.style.display='block'
    }else{
        nameValue=Name.value
        nameErr.style.display='none'
    }
    if(mobile.value.length>10||mobile.value.length<10){
        sign=0
        count++
        numberErr.style.display='block'
    }
    else{
        mobileValue=mobile.value
        numberErr.style.display='none'
    }
    if(pincode.value.length<6 || pincode.value.length>6 || pincode.value.length==0){
        sign=0
        count++
        pinErr.style.display='block'
    }else{
        pincodeValue=pincode.value
        pinErr.style.display='none'
    }
    if(flatHouse.value.length<4){
        sign=0
        count++
        addErr.style.display='block'
    }else{
        flatHouseValue=flatHouse.value
        addErr.style.display='none'
    }
    if(areaStreat.value.length<4){
        sign=0
        count++
        areaErr.style.display='block'
    }else{
        areaStreatValue=areaStreat.value
        areaErr.style.display='none'
    }
    if(checkbox.checked){
        checkErr.style.display='none'
    }else{
        checkErr.style.display='block'
        sign=0
        count++
    }

    let obj={nameValue,mobileValue,flatHouseValue,areaStreatValue,pincodeValue,cityValue,selectAddressTypeValue}
    let arr=[]
    if(sign){
        arr.push(obj)
        localStorage.setItem('address',JSON.stringify(arr))
        alert('welcom'+"  " +nameValue)
        window.location.href='checkout.html'
               
    } 
    if(count<=6){
        setTimeout(()=>{
window.location.reload("./address.html")
        },2000)
    }

}