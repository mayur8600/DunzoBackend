var count1 = 0;

var resKey = document.getElementById("specialbtn");
var addDiv = document.getElementById("addressBox");
var msgDiv = document.getElementById("successMsg");

resKey.disabled = true;
if(resKey.disabled == true){

  resKey.style.backgroundColor = "#cccccc";
  resKey.style.hover = "false";

}
function submitAddress(e) {
  e.preventDefault();
  var resKey = document.getElementById("specialbtn");
  var a = document.getElementById("address").value;
  var c = document.getElementById("city").value;
  var p = document.getElementById("pin").value;
  
     
    addDiv.style.display = "none";
    msgDiv.style.display = "inherit";
  
  if (a != "" && c != "" && p != "") {
    resKey.style.backgroundColor = "rgb(0, 210, 144)";
    resKey.disabled = false;
    
  }
}

 


let abc = JSON.parse(localStorage.getItem("cart"));
var data_div = document.getElementById("data1");
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
  arr.push(abc[i].name);
}
let valid = localStorage.getItem("coupen");
function cartItem() {
  let data = JSON.parse(localStorage.getItem("cart"));
  
  var n = document.getElementById("display1");
  var g = document.getElementById("final");
  let brand = document.getElementById("discounted_price");
  var element = document.createElement("div");
  html = "";
  for (i = 0; i < arr.length; i++) {
    // html += `<div id=${i + 1}><span>➤ </span>${
    //   arr[i]
    // }</div><button onclick=Remove(${i + 1})>Remove</button>`;
    html += `<div class="textData"><div class="listMark"></div>${arr[i]}</div><div class="button-div-con" id = "buttMar"><button onclick=Remove(${i+1}) class = "button-div-ex">
           <div class="sign2" id="minus1">-</div>
             1
           <div class="sign2" id="minus2">+</div>
         </button>
         </div>`
    brand.innerHTML = `Items :${html}`;
  }

  if (valid?.length > 0) {
    n.innerHTML = `<h2><b>Total Price :₹ ${Math.floor(m - (m * 30) / 100)}</b></h2>`;
    g.innerHTML = `<h2><b>Total Price :₹ ${Math.floor(m - (m * 30) / 100)}</b></h2>`;
    // localStorage.removeItem("coupen");
  } else {
    n.innerHTML = `<h2><b>Total Price : ₹ ${m}</b><h2>`;
    g.innerHTML = `<h2><b>Total Price : ₹ ${m}</b><h2>`;
  }
}
cartItem();
function apply() {
  var n = document.getElementById("priceD");
  var coupen = document.getElementById("btnSave").value;
  if (coupen == "masai30") {
    n.innerHTML = `<h2><b>Total Price :₹ ${Math.floor(m - (m * 30) / 100)}</b></h2>`;
  }
}

function Remove(val) {
  let data = JSON.parse(localStorage.getItem("cart"));
  var p = document.getElementById(val);
  arr1 = [];
  for (i = 0; i < data.length; i++) {
    if (i + 1 != val) {
      arr1.push(data[i]);
    }
  }
  data = arr1;

  localStorage.setItem("cart", JSON.stringify(arr1));
  window.location.reload();
}


// address submitted box close function

// function closeIt() {
//       window.location.reload();
//       // msgDiv.style.display = "none"; 
//       // addDiv.style.display = "inherit";
     
// }

function shoppingComplete(e) {
  e.preventDefault();

//   var res = document.getElementById("inputBox");
//   var a = document.getElementById("address").value;
//   var c = document.getElementById("city").value;
//   var p = document.getElementById("pin").value;
//   var n = document.getElementById("name").value;
//   var cn = document.getElementById("cNum").value;
//   var mm = document.getElementById("month").value;
//   var yy = document.getElementById("year").value;
//   var sc = document.getElementById("cvv").value;

//   if (
//     a != "" &&
//     c != "" &&
//     p != "" &&
//     n != "" &&
//     cn != "" &&
//     mm != "" &&
//     yy != "" &&
//     sc != ""
//   ) {
//     setTimeout(function () {
//       alert("Payment is Successfully Done");
//       window.location.href = "../End_Page/endPage.html";
//     }, 2000);
//   } else {
//     alert("Please Fill Require Details");
//   }

displayRazorpay()
}

//////////////////////////Razorpay starts////////////////////////////////////////
function loadScript(src) {
    console.log("hi")
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

// const name = data[0]?.name;
// const email = data[0]?.email;
// const cartItem = data[0]?.cart;
// const usID = data[0]?._id;

const name = "User";
const email = "user@gmail.com";

async function displayRazorpay() {
    
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }



  if (valid?.length > 0) {
      var p = Math.floor(m - (m * 30) / 100)
      
  }else{
      var p = m
  }
      console.log(p)
//       const data = await fetch(
//         `http://localhost:4455/razorpay/${m - (m * 30) / 100}`,
//         { method: "POST" }
//       ).then((t) => t.json());
//     localStorage.removeItem("coupen");
//   } else {
//     const data = await fetch(
//         `http://localhost:4455/razorpay/${m}`,
//         { method: "POST" }
//       ).then((t) => t.json());
//   }

  const data = await fetch(
    `http://localhost:4455/razorpay/${p}`,
    { method: "POST" }
  ).then((t) => t.json());

  // console.log(data)

  const options = {
    key: "rzp_test_bLaITbmnFqKOer",
    currency: data.currency,
    amount: data.amount.toString(),
    order_id: data.id,
    name: "Dunzo India Pvt Ltd",
    description: "Total amount to pay.",
    image: "https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-footer-a7423f59ce95bf41719960ee8314ff2d.png",
    handler: function (response) {
      var kid = response.razorpay_payment_id;
      if(kid != ""){
          redirect()
      }
      // alert(response.razorpay_order_id)
      // alert(response.razorpay_signature
    },
    prefill: {
      name,
      email,
      phone_number: "9899999999",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
function redirect(){
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.removeItem("coupen");
    window.location.href = "../End_Page/endPage.html";
}
