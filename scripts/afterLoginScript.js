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
        console.log(change)
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