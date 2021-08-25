var count1 = 0;
    function submitAddress() {
        var res = document.getElementById("inputBox")
        var a = document.getElementById("address").value
        var c = document.getElementById("city").value
        var p = document.getElementById("pin").value

        if (a != "" && c != "" && p != "") {
            res.style.display = "inherit"
        }
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
        let valid = localStorage.getItem("coupen");
        var n = document.getElementById('display1');
        var g = document.getElementById('final');
        let brand = document.getElementById('discounted_price');
        var element = document.createElement('div')
        html = "";
        for (i = 0; i < arr.length; i++) {
            html += `<div id=${i + 1}><span>➤ </span>${arr[i]}</div><button onclick=Remove(${i + 1})>Remove</button>`
            brand.innerHTML = `Items :${html}`;
        }

        if (valid?.length > 0) {
            n.innerHTML = `<h2><b>Total Price :₹ ${m - ((m * 30) / 100)}</b></h2>`;
            g.innerHTML = `<h2><b>Total Price :₹ ${m - ((m * 30) / 100)}</b></h2>`;
            localStorage.removeItem('coupen')

        } else {
            n.innerHTML = `<h2><b>Total Price : ₹ ${m}</b><h2>`;
            g.innerHTML = `<h2><b>Total Price : ₹ ${m}</b><h2>`;
        }
    }
    cartItem()
    function apply() {
        var n = document.getElementById('priceD');
        var coupen = document.getElementById('btnSave').value
        if (coupen == "masai30") {
            n.innerHTML = `<h2><b>Total Price :₹ ${m - ((m * 30) / 100)}</b></h2>`;

        }

    }

    function Remove(val) {
        let data = JSON.parse(localStorage.getItem("cart"));
        var p = document.getElementById(val)
        arr1 = [];
        for (i = 0; i < data.length; i++) {
            if (i + 1 != val) {
                arr1.push(data[i])
            }
        }
        data = arr1;

        localStorage.setItem('cart', JSON.stringify(arr1));
        window.location.reload();
    }

    function shoppingComplete(e) {
        e.preventDefault();

        var res = document.getElementById("inputBox")
        var a = document.getElementById("address").value
        var c = document.getElementById("city").value
        var p = document.getElementById("pin").value
        var n = document.getElementById("name").value
        var cn = document.getElementById("cNum").value
        var mm = document.getElementById("month").value
        var yy = document.getElementById("year").value
        var sc = document.getElementById("cvv").value

        if (a != "" && c != "" && p != "" && n != "" && cn != "" && mm != "" && yy != "" && sc != "") {

            setTimeout(function () {
                alert('Payment is Successfully Done');
                window.location.href = '../End_Page/endPage.html';
            }, 2000);
        }
        else {
            alert("Please Fill Require Details")
        }
    }