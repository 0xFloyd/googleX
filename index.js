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

changeBackground();

