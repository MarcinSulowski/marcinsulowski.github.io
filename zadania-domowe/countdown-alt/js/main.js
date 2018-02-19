document.getElementById("countdown-button").addEventListener("click", function() {
    changeBoxes();
    changeBoxCss(); 
    changeIcon();
});

function changeIcon() {
    document.getElementById("icon").className += " i-anim";
}

function changeBoxCss() {
    document.getElementById("box-css").className += " box-css-anim";
}

function changeBoxes() {
    var boxes =  document.getElementsByClassName("box");
    var i;
    for (i = 0; i < boxes.length; i++) {
        boxes[i].className += " box-anim";
    }
}