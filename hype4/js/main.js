document.addEventListener('DOMContentLoaded', function () {
    ajax('GET', 'https://bitbay.net/API/Public/ETHPLN/ticker.json');
});

function ajax(method, url) {
    let httpReq = new XMLHttpRequest();

    httpReq.open(method, url);

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {
                const returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }

    httpReq.onerror = function (response) {
        console.log('error');
    }

    httpReq.onsuccess = function (response) {
        const jsonObj = JSON.parse(response);

        const currAverage = document.querySelectorAll('.row-cell.value p');

        for (let i of currAverage) {
            i.innerHTML = Math.round(jsonObj.average) + '<span>PLN</span>';
        }
    }

    httpReq.send();
}