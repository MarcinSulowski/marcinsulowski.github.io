function menuDrop() {
    document.getElementById("droppie").classList.toggle("show");
}

function changeMargin() {
    document.getElementById("main-heading").style.marginTop = "300px";
}

window.onclick = function (event) {
    if (!event.target.matches(".dropdown-button")) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}          

/*
function styleMargin() {
    var heading = document.getElementById("main-heading");
    if (heading.marginTop = "150px") {
        document.getElementById("main-heading").style.marginTop = "300px";
    }
}

window.onload = styleMargin();
*/


window.onclick = function (event) {
    if (event.target.matches(".dropdown-button")) {
        
        var heading = document.getElementById("main-heading");
        
        if (heading.marginTop = "150px") {
            document.getElementById("main-heading").style.marginTop = "300px";
        } else if (heading.marginTop = "300px") {
            document.getElementById("main-heading").style.marginTop = "150px";
        }
    }
}
