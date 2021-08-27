const students = [
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/MmpaRGdyVDFzWmlhczFPVHBmdHN3UT09-product_image.jpg',
        name: 'Britannia Whole Wheat Bread',
        qty: '1',
        price: '40',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615706908945_product_5d5ff56f4fce012c1d04a1a0_1.jpg',
        name: 'Wibs Bread',
        qty: '1',
        price: '28',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615707144704_product_5ea9ae30214fec6bf0256b55_1.jpg',
        name: 'Burger Bun',
        qty: '1',
        price: '16',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/bDg1STI5bS9tSEZTYXJGVldFWHUrQT09-product_image.jpg',
        name: 'Amul Gold Standardised Milk',
        qty: '1',
        price: '68',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/enBVQXJFYW1CZ1hMZVZYNEp1dnpmdz09-product_image.jpg',
        name: 'Nestle A+ Nourished Toned Milk',
        qty: '1',
        price: '75',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615700299553_product_5bd2cef973cdab7135874ebc_1.jpg',
        name: 'Amul Gold Milk Pouch',
        qty: '1',
        price: '64',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/SW5yL0s5eWk1NUlNc0l0VWJpckYyZz09-product_image.jpg',
        name: 'Amul Butter',
        qty: '1',
        price: '48',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/dkxmWE1KeWx6ZTV5dmRFWUFDVnQrUT09-product_image.jpg',
        name: 'Paneer',
        qty: '1',
        price: '75',

    },
]

var bool = [
    {
        value:true,
    }
]

if (localStorage.getItem('students') == null) {
    localStorage.setItem('students', JSON.stringify(students))

}
function appendStudents(data) {
    let parent_div = document.getElementById('parent')


    parent_div.innerHTML = null

    data.forEach(function (el) {
        let div = document.createElement('div')
        let img = document.createElement('img');
        img.src = el.img;

        let p_name = document.createElement('p');
        p_name.innerHTML = el.name;

        let p_qty = document.createElement('p');
        p_qty.innerHTML = el.qty;

        let p_price = document.createElement('p');
        p_price.innerHTML = el.price;

        let btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.style.display = "block";
        div.append(img, p_name, p_qty, p_price)
    });
}

appendStudents(JSON.parse(localStorage.getItem('students')))


let x = document.getElementById("parent");
//let y = document.getElementById("imageDivEmt");

function addToCart(val) {

    let students = JSON.parse(localStorage.getItem("students"));
    var obj = students[val];
    let array;
    array = localStorage.getItem('cart');
    if (array == null) {
        array = [];
    } else {

        array = JSON.parse(localStorage.getItem('cart'))
    }
    array.push(obj);
    localStorage.setItem('cart', JSON.stringify(array));
    window.location.reload();
}



let abc = JSON.parse(localStorage.getItem("cart"));
var data_div = document.getElementById('data1')
var m = 0;
var arr = [];
for (let i = 0; i < abc?.length; i++) {

let y = document.createElement("div");

let img = document.createElement("img");
img.src = abc[i].img;

let price = document.createElement("p");
price.innerHTML = `Price : ${abc[i].price}`;


let des = document.createElement("p");
des.innerHTML = `Qty : ${abc[i].qty}`;

let brand = document.createElement("p");
brand.innerHTML = `Brand :${abc[i].name} `;


m += Number(abc[i].price);
arr.push(abc[i].name)
}




function cartItem() {
let data = JSON.parse(localStorage.getItem("cart"));
var l = document.getElementById('display');
var n = document.getElementById('display1');
var k = document.getElementById('counter');
let g = document.getElementById('lblCartCount');
let z = document.getElementById('checkAndCoup');
k.innerHTML = `Items:${data?.length}`
if(data?.length > 3){
l.style.display ='inherit'
n.style.display ='inherit'
}

if(data?.length > 0){
   g.append(data.length);
   g.style.display = 'inherit';
   z.style.display = 'inherit';
}

//let brand = document.getElementById('items');
let brand = document.getElementById('imageDivEmt')
var element = document.createElement('div')
html="";
for(i=0; i < arr.length; i++){
html += `<div class="textData"><div class="listMark"></div>${arr[i]}</div><div class="button-div-con" id = "buttMar"><button onclick=Remove(${i+1}) class = "button-div-ex">
           <div class="sign2" id="minus1">-</div>
             1
           <div class="sign2" id="minus2">+</div>
         </button>
         </div>`
brand.innerHTML = `${html}`;
}

var n = document.getElementById('priceD');
n.innerHTML = `₹ ${m}`;
}
cartItem()

// coupen function

var coupen = false;

function apply() {
var n = document.getElementById('priceD');
var coupen = document.getElementById('btnSave').value
if(coupen == "masai30"){
    n.innerHTML = `₹ ${m-((m*30)/100)}`;
    if (localStorage.getItem('coupen') == null) {
    localStorage.setItem('coupen', JSON.stringify(bool))
}
}
else{
    alert('Invalid Coupen')
}
}


// var count = 0;
// function down() {
//     count++;
//     var k = document.getElementById('press');
//     if (count % 2 == 1) {
//         k.style.display = 'inherit';
//     }
//     else {
//         k.style.display = 'none';
//     }

// }


// <!-- The Modal -->
var modal = document.getElementById('myModal')
var newModal = document.getElementById('myModal1')
var btn = document.getElementById("signbtn");
var btnloc = document.getElementById("locate");
var span = document.getElementById("close");
var span1 = document.getElementById("close1");
btnloc.onclick = function() {
document.body.style.overflow="hidden";
modal.style.display = "block";
}
span.onclick = function() {
document.body.style.overflow="visible";
// modal1.style.display = "none";
modal.style.display = "none";
}

span1.onclick = function() {
document.body.style.overflow="visible";
newModal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal || event.target == newModal) {
document.body.style.overflow="visible"
modal.style.display = "none";
newModal.style.display = "none";
}
}
var pin1 = [];
function otp() {
var otp1 = document.getElementById('myInput1').value
var checkBox = document.getElementById("myCheck");
var btn1 = document.getElementById("key")
var btn2 = document.getElementById("key1")
var otp3 = document.getElementById('this')
console.log(otp3)
if(otp1.length == 10 && checkBox.checked == true){
    let pin = Math.floor(Math.random()*9000)+1000;
    otp3.style.display="inherit"
    btn1.style.display="none"
    btn2.style.display="inherit"
    console.log(pin)
    alert(pin);
    pin1.push(pin)
    
}
else{
    alert('Verify mobile Invalid or Check terms and conditions');
}

}
function otpNew(){
var otp2 = document.getElementById('myInput2').value
var btn1 = document.getElementById("key")
var btn2 = document.getElementById("key1")
var otp3 = document.getElementById('this')
if(pin1[pin1.length-1] == otp2){
    otp3.style.display="none"
    btn1.style.display="inherit"
    btn2.style.display="none"
    alert('login successfull')
    newModal.style.display = "none";
    }
}
function submit() {
var input = document.getElementById('myInput').value;
var change = document.getElementById('city');
 if(input.toLowerCase() == "pune, maharashtra, india" || input.toLowerCase() == "banglore, india" || input.toLowerCase() == "gurgaon, india" || input.toLowerCase() == "hayderabad, india" || input.toLowerCase() == "new delhi, india" || input.toLowerCase() == "chennai, india" || input.toLowerCase() == "mumbai, maharashtra, india")
 {   change.innerHTML= input;
    modal.style.display = "none";
}
else{
    alert('Dunzo services are not available at this location yet. Please update your location.')
}
}
var count1 = 0;
function user() {
count1++;
var k = document.getElementById("myDropdown")
if (count1 % 2 == 1) {
        k.style.display = 'inherit';
    }
    else {
        k.style.display = 'none';
    }
} 

function Remove(val){
let data = JSON.parse(localStorage.getItem("cart"));
var p = document.getElementById(val)
arr1=[];
for(i = 0; i < data.length; i++){
    if(i+1 != val){
        arr1.push(data[i])
    }
}
data = arr1;

localStorage.setItem('cart', JSON.stringify(arr1));
    window.location.reload();
}

// function toShowProvisions() {
//     let provisionsData = document.getElementById('provisionsData');
//     let breakFastData = document.getElementById('breakFastData');
//     provisionsData.style.display = 'inherit';
//     breakFastData.style.display = 'none';

// }

function checkOut(){
window.location.href="../Checkout_page/checkout.html"
}