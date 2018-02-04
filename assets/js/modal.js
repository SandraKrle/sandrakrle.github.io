// Get the modal
var modal1 = document.getElementById('myModal-1');
var modal2 = document.getElementById('myModal-2');
var modal3 = document.getElementById('myModal-3');
var modal4 = document.getElementById('myModal-4');

// Get the button that opens the modal
var btn1 = document.getElementById("btn-modal-1");
var btn2 = document.getElementById("btn-modal-2");
var btn3 = document.getElementById("btn-modal-3");
var btn4 = document.getElementById("btn-modal-4");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var closeMe1 = document.getElementsByClassName("btn-close-modal-1")[0];
var closeMe2 = document.getElementsByClassName("btn-close-modal-2")[0];
var closeMe3 = document.getElementsByClassName("btn-close-modal-3")[0];
var closeMe4 = document.getElementsByClassName("btn-close-modal-4")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
closeMe1.onclick = function() {
    modal1.style.display = "none";
}
closeMe2.onclick = function() {
    modal2.style.display = "none";
}
closeMe3.onclick = function() {
    modal3.style.display = "none";
}
closeMe4.onclick = function() {
    modal4.style.display = "none";
}
