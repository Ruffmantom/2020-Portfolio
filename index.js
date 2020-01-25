let overlayText = $('.overlay-text').text();
console.log(overlayText)
console.log(overlayText.toUpperCase())
var upper = overlayText.toUpperCase()
console.log('hi emily')


function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        $(".navbar").css("background-color", "rgba(100, 100, 100)");
        // $(".nav-logo").css("height", "50px");
        // $(".nav-logo").css("width", "auto");
        // $("#clock").css("font-size", "12px");

    } else {
        $(".navbar").css("background", "none");

    }
}


$(document).ready(function () {

    window.onscroll = function () { scrollFunction() };


    // the end of document.ready
});