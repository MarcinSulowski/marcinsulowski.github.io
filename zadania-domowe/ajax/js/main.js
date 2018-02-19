function ajax(method, url) {
    var httpReq = new XMLHttpRequest();

    httpReq.open(method, url);

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {
                var returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }

    httpReq.onerror = function (response) {
        console.log('error');
    }

    httpReq.onsuccess = function (response) {
        var jsonObj = JSON.parse(response);

        var div = document.createElement('div');
        div.setAttribute('id', 'coders-data');
        var button = document.getElementById('fetch-data');
        button.parentElement.insertBefore(div, button.nextSibling);

        for (key in jsonObj) {
            var paragraph = document.createElement('p');
            paragraph.innerHTML = key + ': ' + jsonObj[key];
            div.appendChild(paragraph);
        }

        //        var paragraph1 = document.createElement('p');
        //        var paragraph2 = document.createElement('p');
        //        var paragraph3 = document.createElement('p');
        //        var paragraph4 = document.createElement('p');
        //        
        //        paragraph1.innerHTML = 'Imię: ' + jsonObj.imie;
        //        paragraph2.innerHTML = 'Nazwisko: ' + jsonObj.nazwisko;
        //        paragraph3.innerHTML = 'Zawod: ' + jsonObj.zawod;
        //        paragraph4.innerHTML = 'Firma: ' + jsonObj.firma;
        //        
        //        div.appendChild(paragraph1);
        //        div.appendChild(paragraph2);
        //        div.appendChild(paragraph3);
        //        div.appendChild(paragraph4);

    }

    httpReq.send();
}

document.getElementById('fetch-data').addEventListener('click', function () {
    ajax('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');
})