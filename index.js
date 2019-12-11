//  https://stackoverflow.com/questions/34893437/parallax-with-fading-effect-background-images

let sections = document.getElementsByClassName('section');
sections = Array.from(sections);



function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    return bgColor;
}



const changeBackground = function() {
    sections.forEach(function (div) {
        div.style.backgroundColor = random_bg_color();
});
}

function amountscrolled() {
    var winheight = $(window).height()  // get height of browser window 
    var docheight = $(document).height()        //  height of the entire document (whole scroll area)
    var scrollTop = $(window).scrollTop()       // detect how many pixels user scrolled 
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop / trackLength * 100)// gets percentage scrolled (ie: 80 NaN if tracklength == 0)

    var opacity = pctScrolled;
    console.log(pctScrolled + '% scrolled')

    //$(".fade-bg").css("opacity", opacity);

    $(".fade-bg").css("background-color", random_bg_color())
}

$(document).ready(function() {
    $(window).on("scroll", function () {
        amountscrolled();
    })
});


