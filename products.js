var open = document.getElementById("openmenu");
var sidenav = document.getElementById("sidenav");
var closenav = document.getElementById("closemenu");
open.addEventListener("click", function(){
    sidenav.style.right = "0";
});
closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%";
});


// Search container

var products = document.getElementById("product-container");
var search = document.getElementById("search");
var list = products.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < list.length; count++) {
        var pname = list[count].querySelector('h1').textContent.toUpperCase();
        
        if (pname.indexOf(enteredValue) < 0) {
            list[count].style.display = 'none';
        } else {
            list[count].style.display = 'block';
        }
    }
});
