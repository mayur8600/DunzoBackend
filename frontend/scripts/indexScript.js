var userMob = [];
var count = 0;
function down() {
  count++;
  var k = document.getElementById("press");
  if (count % 2 == 1) {
    k.style.display = "inherit";
  } else {
    k.style.display = "none";
  }
}

// Get the modal
// <!-- The Modal -->
var modal = document.getElementById("myModal");
var newModal = document.getElementById("myModal1");
var findModal = document.getElementById("findModal");
var find = document.getElementById("find");
var btn = document.getElementById("signbtn");
var btn1 = document.getElementById("signbtn1");
var btnloc = document.getElementById("locate");
var span = document.getElementById("close");
var span1 = document.getElementById("close1");
var findspan = document.getElementById("findclose");
btnloc.onclick = function () {
  document.body.style.overflow = "hidden";
  modal.style.display = "block";
};

find.onclick = function () {
  document.body.style.overflow = "hidden";
  findModal.style.display = "block";
};

btn.onclick = function () {
  document.body.style.overflow = "hidden";
  newModal.style.display = "block";
};

btn1.onclick = function () {
  document.body.style.overflow = "hidden";
  newModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  document.body.style.overflow = "visible";
  // modal1.style.display = "none";
  modal.style.display = "none";
};

span1.onclick = function () {
  document.body.style.overflow = "visible";
  // modal1.style.display = "none";
  newModal.style.display = "none";
};

findspan.onclick = function () {
  document.body.style.overflow = "visible";
  // modal1.style.display = "none";
  findModal.style.display = "none";
  window.location.reload();
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal || event.target == newModal) {
    document.body.style.overflow = "visible";
    modal.style.display = "none";
    newModal.style.display = "none";
  }
};
var pin1 = [];
function otp() {
  var otp1 = document.getElementById("myInput1").value;
  let formData = { mobile_no: document.getElementById("myInput1").value }
  var checkBox = document.getElementById("myCheck");
  var btn1 = document.getElementById("key");
  var btn2 = document.getElementById("key1");
  var otp3 = document.getElementById("this");
  console.log(otp3);
  if (otp1.length == 10 && checkBox.checked == true) {

    formData = JSON.stringify(formData);


    ///////////////////////////---------------------

    fetch('http://localhost:4455/users/', {
      method: 'GET',
      // body: formData,

      //additional information about

      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log('res:', res)
        let val = res.filter((el) => (el.mobile_no  == +otp1))


        if (val.length !== 0 ) {
          userMob.push(val[0].mobile_no);
          // console.log(val)
          let pin = Math.floor(Math.random() * 9000) + 1000;
                otp3.style.display = "inherit";
                btn1.style.display = "none";
                btn2.style.display = "inherit";
                console.log(pin);
                alert(pin);
                pin1.push(pin);
        }
        else {






          ///////--------------------------------------
          fetch('http://localhost:4455/users/', {
            method: 'POST',
            body: formData,

            //additional information about

            headers: {
              "Content-Type": "application/json",
            }
          })
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              // console.log('res:', res)
              if (res.mobile_no != "") {
                alert('u are registred to syatem')


                let pin = Math.floor(Math.random() * 9000) + 1000;
                otp3.style.display = "inherit";
                btn1.style.display = "none";
                btn2.style.display = "inherit";
                console.log(pin);
                alert(pin);
                pin1.push(pin);




              } else {
                alert("Verify mobile Invalid or Check terms and conditions");
              }

              //     }
              //     else {
              //         alert('User Already Registered')
              //     }
              

            })

            // )
                // console.log(u,t)

            .catch((err) => {
              console.log('err:', err)
            })
        }

            // .catch((err) => {
            //   console.log('err:', err)
            // })

      })
  }
}

///----------------------------------------------------------------

///----------------------------------------------------------------

function otpNew() {
  var otp2 = document.getElementById('myInput3').value
  var btn1 = document.getElementById("key")
  var btn2 = document.getElementById("key1")
  var otp3 = document.getElementById('this')
  if (pin1[pin1.length - 1] == otp2) {
    console.log(userMob)
    otp3.style.display = "none"
    btn1.style.display = "inherit"
    btn2.style.display = "none"
    alert('Yay! Login Successfull')
    window.location.href = "../afterLogin_Page/afterLogin.html?" + userMob[userMob.length - 1]
    newModal.style.display = "none";
  } else {
    alert("OTP Provided by You is Invalid");
  }
}

function submit() {
  var input = document.getElementById("myInput").value;
  var change = document.getElementById("city");
  if (
    input.toLowerCase() == "pune, maharashtra, india" ||
    input.toLowerCase() == "banglore, india" ||
    input.toLowerCase() == "gurgaon, india" ||
    input.toLowerCase() == "hayderabad, india" ||
    input.toLowerCase() == "new delhi, india" ||
    input.toLowerCase() == "chennai, india" ||
    input.toLowerCase() == "mumbai, maharashtra, india"
  ) {
    change.innerHTML = input;
    modal.style.display = "none";
    console.log(change);
  } else {
    alert(
      "Dunzo services are not available at this location yet. Please update your location."
    );
  }
}

let movies_div = document.getElementById("movies");
let sProduct = document.getElementById("sproduct");
var att = document.getElementById("colFlex");
let empty = document.getElementById("findbtm");
let newempty = document.getElementById("centerCont");
var setTimerId;
async function searchData() {
  let query = document.getElementById("myInput2").value;
  console.log(query);

  const str2 = query.charAt(0).toUpperCase() + query.slice(1);

  console.log(str2);

  if (str2.length == "") {
    movies_div.style.display = "none";
    sProduct.style.display = "none";
    // window.location.reload();
  } else {
    let res = await fetch(`http://localhost:4455/stores/search/${str2}`);
    let data = await res.json();
    let result = await fetch(`http://localhost:4455/products/search/${str2}`);
    let dataP = await result.json();
    console.log("data:", data);
    console.log("dataP:", dataP);

    return [data, dataP];
    //  return dataP;
  }
}

function takeValue() {
  att.style.backgroundColor = "white";
  if (setTimerId) {
    return false;
  }
  setTimerId = setTimeout(() => {
    main();
    setTimerId = undefined;
  }, 500);
  console.log("setTimerId:", setTimerId);
}

function appendData(d) {
  movies_div.innerHTML = null;
  if (d.length > 0) {
    newempty.style.display = "block";
    empty.style.display = "none";
    movies_div.style.display = "block";
  } else {
    movies_div.style.display = "none";
  }
  console.log("d:", d);
  movies_div.style.background = "white";
  d?.forEach(({ img, store_name, address, distance, travel_time }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "p_Div");
    let divs = document.createElement("div");
    divs.setAttribute("class", "s_Div");
    let img1 = document.createElement("img");
    img1.src = img;
    img1.setAttribute("class", "p_img");
    let p_el = document.createElement("p");
    p_el.innerHTML = store_name;
    p_el.setAttribute("class", "s_Att");
    let p_add = document.createElement("p");
    p_add.innerHTML = address;
    p_add.setAttribute("class", "s_Add");

    let s_dist = document.createElement("p");
    s_dist.innerHTML = `
 ${distance} km`;
    s_dist.setAttribute("class", "s_dis");

    let s_time = document.createElement("p");
    s_time.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="s_clock"><path d="M7.483 7v.1h2.334v.967h-3.3V4.183h.966V7zM7 12.733A5.733 5.733 0 117 1.267a5.733 5.733 0 010 11.466zm0-.966a4.767 4.767 0 100-9.534 4.767 4.767 0 000 9.534z" stroke="#fff" stroke-width=".2"></path></svg> ${travel_time} mins`;
    s_time.setAttribute("class", "s_time");

    divs.append(s_dist, s_time);
    div.append(img1, p_el, p_add, divs);
    console.log(div);
    movies_div.append(div);
    store();
  });
}

function appendDataP(d) {
  sProduct.innerHTML = null;
  if (d.length > 0) {
    if (movies_div.style.display == "block") {
      sProduct.style.display = "none";
    }
    sProduct.style.display = "none";
  }
  console.log("d:", d);
  sProduct.style.background = "white";
  d?.forEach(({ img, product_name, price }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "p_Div");
    let divp = document.createElement("div");
    divp.setAttribute("class", "p1_Div");
    let img1 = document.createElement("img");
    img1.src = img;
    img1.setAttribute("class", "p_img");
    let p_el = document.createElement("p");
    p_el.innerHTML = product_name;
    p_el.setAttribute("class", "p_Att");

    var p_price = document.createElement("p");
    p_price.innerHTML = `???  ${price}`;
    p_price.setAttribute("class", "p_pri");

    let btn = document.createElement("buttton");
    btn.textContent = "+ ADD";
    btn.style.color = "#00d290";

    btn.addEventListener("click", function () {
      addToCart(d);
    });
    divp.append(p_price, btn);
    div.append(img1, p_el, divp);
    console.log(div);
    sProduct.append(div);
    // store()
  });
}

async function main() {
  let data = await searchData();
  appendData(data[0]);
  appendDataP(data[1]);
}

function store() {
  movies_div.style.display = "grid";
  sProduct.style.display = "none";
}

function product() {
  movies_div.style.display = "none";
  sProduct.style.display = "grid";
}

var header = document.getElementById("myTab");
var btns = header.getElementsByClassName("tablinks");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}