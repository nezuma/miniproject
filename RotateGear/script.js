window.addEventListener('scroll', function() {
    var star = document.getElementById("star");
    star.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
})