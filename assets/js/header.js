function myFunction() {
    var x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
        x.classList += " responsive";
    }
    
    else if (x.className === "topnav topnav-scrolled") {
        x.className += " responsive";
    } 
    
    else if (x.classList === "topnav topnav-scrolled responsive") {
        x.className -= " responsive";
    }
    else {
        x.className = "topnav topnav-scrolled";
    }
}


$(window).scroll(function () {

    var mn = $(".topnav");
        mns = "topnav-scrolled";
        hdr = $('.hero').height();

    if ($(this).scrollTop() > hdr) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
    }
});
