// Get the modal
var modal1 = document.getElementById('myModal-1');
var modal2 = document.getElementById('myModal-2');

// Get the button that opens the modal
var btn1 = document.getElementById("btn-modal-1");
var btn2 = document.getElementById("btn-modal-2");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var closeMe1 = document.getElementsByClassName("btn-close-modal-1")[0];
var closeMe2 = document.getElementsByClassName("btn-close-modal-2")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
closeMe1.onclick = function() {
    modal1.style.display = "none";
}
closeMe2.onclick = function() {
    modal2.style.display = "none";
}