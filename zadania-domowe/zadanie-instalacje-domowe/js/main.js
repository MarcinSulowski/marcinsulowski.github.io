var tool = document.getElementsByClassName("tooltip-button");
for (var i = 0; i < tool.length; i++) {
    tool[i].addEventListener("click", showTooltip);
}

function showTooltip() {
    var tooltipText = this.childNodes[1];
    if (tooltipText.style.visibility === 'hidden') {
        tooltipText.style.visibility = 'visible';
    } else {
        tooltipText.style.visibility = 'hidden';
    }

    var tips = document.getElementsByClassName('tooltip-text');
    window.onclick = function(e) {
        if (!e.target.matches('.tooltip-button')) {
            for (var i = 0; i < tips.length; i++) {
                var openTip = tips[i];
                if (openTip.style.visibility === 'visible') {
                    openTip.style.visibility = 'hidden';
                }
            }
        }
    }
}

var checkbox = document.getElementById('submenu-checkbox');
var submenu = document.getElementById('submenu-container');
var label = document.getElementById('checkbox-label');
window.onclick = function(e) {
    if(!e.target.matches('#submenu-checkbox') && checkbox.checked) {
        checkbox.checked = false;
    }
}