var count = 0;
function down() {
    count++;
    var k = document.getElementById('press');
    if (count % 2 == 1) {
        k.style.display = 'inherit';
    }
    else {
        k.style.display = 'none';
    }

}

// Get the modal
// <!-- The Modal -->
var modal = document.getElementById('myModal')
var newModal = document.getElementById('myModal1')
var findModal = document.getElementById('findModal')
var find = document.getElementById("find");
var btn = document.getElementById("signbtn");
var btn1 = document.getElementById("signbtn1");
var btnloc = document.getElementById("locate");
var span = document.getElementById("close");
var span1 = document.getElementById("close1");
var findspan = document.getElementById("findclose");
btnloc.onclick = function() {
document.body.style.overflow="hidden";
modal.style.display = "block";
}

find.onclick = function() {
    document.body.style.overflow="hidden";
    findModal.style.display = "block";
    }

btn.onclick = function() {
document.body.style.overflow="hidden";
newModal.style.display = "block";
}

btn1.onclick = function() {
document.body.style.overflow="hidden";
newModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
document.body.style.overflow="visible";
// modal1.style.display = "none";
modal.style.display = "none";
}

span1.onclick = function() {
document.body.style.overflow="visible";
// modal1.style.display = "none";
newModal.style.display = "none";
}

findspan.onclick = function() {
    document.body.style.overflow="visible";
    // modal1.style.display = "none";
    findModal.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
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
    alert('Yay! Login Successfull')
    window.location.href="../afterLogin_Page/afterLogin.html"
    newModal.style.display = "none";
    }
    else{
        alert('OTP Provided by You is Invalid')
    }
}

function submit() {
var input = document.getElementById('myInput').value;
var change = document.getElementById('city');
 if(input.toLowerCase() == "pune, maharashtra, india" || input.toLowerCase() == "banglore, india" || input.toLowerCase() == "gurgaon, india" || input.toLowerCase() == "hayderabad, india" || input.toLowerCase() == "new delhi, india" || input.toLowerCase() == "chennai, india" || input.toLowerCase() == "mumbai, maharashtra, india")
 {   change.innerHTML= input;
    modal.style.display = "none";
    console.log(change)
}
else{
    alert('Dunzo services are not available at this location yet. Please update your location.')
}
}




let newData = document.getElementById('bData');
    var setTimerId;
    async function searchData() {
        let query = document.getElementById('myInput2').value;
        console.log(query);

        // if (query.length <= 2) {
        //     return false;
        // }
        let res = await fetch(`http://localhost:4455/stores/search/${query}`);
        let data = await res.json();
        console.log('data:', data)

        return data.Search;

    }

function takeValue() {
    if (setTimerId) {
        return false;
    }
    setTimerId = setTimeout(() => {

        main();
        setTimerId = undefined;
    }, 500);
    console.log('setTimerId:', setTimerId);

};

function appendData(d) {
    newData.innerHTML = null;
    if (d.length > 0) {
        newData.style.display = "block";
    } else {
        newData.style.display = "none";
    }
    console.log('d:', d)
    newData.style.background = "white";
    d?.forEach(({ img, store_name, address }) => {

        let img = document.createElement("img");
        img.src = img;
        let p = document.createElement('p');
        p.innerText = store_name;
        let p_add = document.createElement('p');
        p_add.innerText = address;
        bData.append(img, p, p_add);
    });
};

async function main() {
    let data = await searchData();
    appendData(data);
};