function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    if(podatek) {
        var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19);
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }
    
    var kapital = wplata * Math.pow((1 + (oprocentowanieOpodatkowane / okresKapitalizacji)), iloscLat * okresKapitalizacji);
    kapital = kapital.toFixed(2);
    return kapital;
}


function oblicz() {
    var wplata = document.getElementById('wplata').value;
    wplata = parseInt(wplata, 10);
    
    var iloscLat = document.getElementById('ilosc-lat').value;
    iloscLat = parseInt(iloscLat, 10);
    
    var okresKapitalizacji = document.getElementById('okres-kapitalizacji').value;
    
    var oprocentowanie = document.getElementById('oprocentowanie').value;
    oprocentowanie = (oprocentowanie / 100);
    
    var podatek = document.getElementById('podatek');
    podatek = podatek.checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    document.querySelector('p').innerHTML = wynik;
}
