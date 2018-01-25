var tool = document.getElementsByClassName("tooltip-button");
for (var i = 0; i < tool.length; i++) {
    tool[i].addEventListener("click", showTooltip);
}

function showTooltip() {
    var toolTipText = this.childNodes[1];
    if (toolTipText.style.visibility === 'hidden') {
        toolTipText.style.visibility = 'visible';
    } else {
        toolTipText.style.visibility = 'hidden';
    }
    
    var allTooltipTexts = document.getElementsByClassName('tooltip-text');
    window.onclick = function(e) {
    if(!e.target.matches('.tooltip-button')) {
        if (toolTipText.style.visibility === 'visible') {
        toolTipText.style.visibility = 'hidden';
    } 
    }
}
}

