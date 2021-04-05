console.log("https://github.com/malisahin89");

function checktier() {
    var tier = document.getElementById('istenilenRutbe');
    var list = document.getElementById('eloboost-division-new');
    if (tier.value != 'master') {
        list.innerHTML = '<option value="4">LİG 4</option><option value="3">LİG 3</option><option value="2">LİG 2</option><option value="1">LİG 1</option>';
    } else {
        list.innerHTML = '<option value="4">LİG 4</option>'
    }
}

function limit() {
    var sec1 = document.getElementById('simdikiRutbe');
    var sec2 = document.getElementById('istenilenRutbe');

    if (sec1.value == 'demir') {
        sec2.innerHTML = '<option value="demir">DEMİR</option><option value="bronz">BRONZ</option><option value="gumus">GÜMÜŞ</option><option value="altin">ALTIN</option><option value="platin">PLATİN</option><option value="elmas">ELMAS</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'bronz') {
        sec2.innerHTML = '<option value="bronz">BRONZ</option><option value="gumus">GÜMÜŞ</option><option value="altin">ALTIN</option><option value="platin">PLATİN</option><option value="elmas">ELMAS</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'gumus') {
        sec2.innerHTML = '<option value="gumus">GÜMÜŞ</option><option value="altin">ALTIN</option><option value="platin">PLATİN</option><option value="elmas">ELMAS</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'altin') {
        sec2.innerHTML = '<option value="altin">ALTIN</option><option value="platin">PLATİN</option><option value="elmas">ELMAS</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'platin') {
        sec2.innerHTML = '<option value="platin" >PLATİN</option><option value="elmas">ELMAS</option><option value="master">MASTER</option>';
    }
    if (sec1.value == 'elmas') {
        sec2.innerHTML = '<option value="elmas">ELMAS</option><option value="master">MASTER</option>';
    }
}

function limit2() {
    var lig1 = document.getElementById('simdikiRutbe');
    var lig2 = document.getElementById('istenilenRutbe');
    var sec1 = document.getElementById('eloboost-division-old');
    var sec2 = document.getElementById('eloboost-division-new');

    if (lig1.value == lig2.value) {
        if (sec1.value == '4') {
            sec2.innerHTML = '<option value="3">LİG 3</option><option value="2">LİG 2</option><option value="1">LİG 1</option>';
        }
        if (sec1.value == '3') {
            sec2.innerHTML = '<option value="2">LİG 2</option><option value="1">LİG 1</option>';
        }
        if (sec1.value == '2') {
            sec2.innerHTML = '<option value="1">LİG 1</option>';
        }
        if (sec1.value == '1') {
            sec2.innerHTML = '<option value="1">LİG 1</option>';
        }
    } else {

        sec2.innerHTML = '<option value="4">LİG 4</option><option value="3">LİG 3</option><option value="2">LİG 2</option><option value="1">LİG 1</option>';

    }
}

function gettier_old() {
    var img = document.getElementById('tier-img-old');
    var league = document.getElementById('simdikiRutbe').value;
    var division = document.getElementById('eloboost-division-old').value;

    if (league == 'demir' && division == '4') { img.src = 'images/demir4.png'; }
    if (league == 'demir' && division == '3') { img.src = 'images/demir3.png'; }
    if (league == 'demir' && division == '2') { img.src = 'images/demir2.png'; }
    if (league == 'demir' && division == '1') { img.src = 'images/demir1.png'; }

    if (league == 'bronz' && division == '4') { img.src = 'images/bronz4.png'; }
    if (league == 'bronz' && division == '3') { img.src = 'images/bronz3.png'; }
    if (league == 'bronz' && division == '2') { img.src = 'images/bronz2.png'; }
    if (league == 'bronz' && division == '1') { img.src = 'images/bronz1.png'; }

    if (league == 'gumus' && division == '4') { img.src = 'images/gumus4.png'; }
    if (league == 'gumus' && division == '3') { img.src = 'images/gumus3.png'; }
    if (league == 'gumus' && division == '2') { img.src = 'images/gumus2.png'; }
    if (league == 'gumus' && division == '1') { img.src = 'images/gumus1.png'; }

    if (league == 'altin' && division == '4') { img.src = 'images/altin4.png'; }
    if (league == 'altin' && division == '3') { img.src = 'images/altin3.png'; }
    if (league == 'altin' && division == '2') { img.src = 'images/altin2.png'; }
    if (league == 'altin' && division == '1') { img.src = 'images/altin1.png'; }

    if (league == 'platin' && division == '4') { img.src = 'images/platin4.png'; }
    if (league == 'platin' && division == '3') { img.src = 'images/platin3.png'; }
    if (league == 'platin' && division == '2') { img.src = 'images/platin2.png'; }
    if (league == 'platin' && division == '1') { img.src = 'images/platin1.png'; }

    if (league == 'elmas' && division == '4') { img.src = 'images/elmas4.png'; }
    if (league == 'elmas' && division == '3') { img.src = 'images/elmas3.png'; }
    if (league == 'elmas' && division == '2') { img.src = 'images/elmas2.png'; }
    if (league == 'elmas' && division == '1') { img.src = 'images/elmas1.png'; }
}

function gettier_new() {
    var img = document.getElementById('tier-img-new');
    var league = document.getElementById('istenilenRutbe').value;
    var division = document.getElementById('eloboost-division-new').value;

    if (league == 'demir' && division == '4') { img.src = 'images/demir4.png'; }
    if (league == 'demir' && division == '3') { img.src = 'images/demir3.png'; }
    if (league == 'demir' && division == '2') { img.src = 'images/demir2.png'; }
    if (league == 'demir' && division == '1') { img.src = 'images/demir1.png'; }

    if (league == 'bronz' && division == '4') { img.src = 'images/bronz4.png'; }
    if (league == 'bronz' && division == '3') { img.src = 'images/bronz3.png'; }
    if (league == 'bronz' && division == '2') { img.src = 'images/bronz2.png'; }
    if (league == 'bronz' && division == '1') { img.src = 'images/bronz1.png'; }

    if (league == 'gumus' && division == '4') { img.src = 'images/gumus4.png'; }
    if (league == 'gumus' && division == '3') { img.src = 'images/gumus3.png'; }
    if (league == 'gumus' && division == '2') { img.src = 'images/gumus2.png'; }
    if (league == 'gumus' && division == '1') { img.src = 'images/gumus1.png'; }

    if (league == 'altin' && division == '4') { img.src = 'images/altin4.png'; }
    if (league == 'altin' && division == '3') { img.src = 'images/altin3.png'; }
    if (league == 'altin' && division == '2') { img.src = 'images/altin2.png'; }
    if (league == 'altin' && division == '1') { img.src = 'images/altin1.png'; }

    if (league == 'platin' && division == '4') { img.src = 'images/platin4.png'; }
    if (league == 'platin' && division == '3') { img.src = 'images/platin3.png'; }
    if (league == 'platin' && division == '2') { img.src = 'images/platin2.png'; }
    if (league == 'platin' && division == '1') { img.src = 'images/platin1.png'; }

    if (league == 'elmas' && division == '4') { img.src = 'images/elmas4.png'; }
    if (league == 'elmas' && division == '3') { img.src = 'images/elmas3.png'; }
    if (league == 'elmas' && division == '2') { img.src = 'images/elmas2.png'; }
    if (league == 'elmas' && division == '1') { img.src = 'images/elmas1.png'; }

    if (league == 'master') { img.src = 'images/master4.png'; }
}

var lig4 = [23, 23, 23, 23, 28, 28, 28, 28, 64, 64, 64, 73, 73, 73, 73, 100, 100, 100, 100, 181, 181, 181, 181, 190, 190];
var lig3 = [21, 21, 21, 21, 26, 26, 26, 26, 44, 44, 44, 50, 50, 50, 50, 68, 68, 68, 68, 124, 124, 124, 124, 130, 130];
var lig2 = [16, 16, 16, 16, 24, 24, 24, 24, 39, 39, 39, 44, 44, 44, 44, 61, 61, 61, 61, 110, 110, 110, 110, 120, 120];
var lig1 = [15, 15, 15, 15, 20, 20, 20, 20, 34, 34, 34, 39, 39, 39, 39, 53, 53, 53, 53, 96, 96, 96, 96, 100, 100];


function lighesap(league) {
    if (league == 'demir') { return 0; }
    if (league == 'bronz') { return 1; }
    if (league == 'gumus') { return 2; }
    if (league == 'altin') { return 3; }
    if (league == 'platin') { return 4; }
    if (league == 'elmas') { return 5; }
    if (league == 'master') { return 6; }
}

function fiyatsec(fc) {
    if (fc == '1') { return 4; }
    if (fc == '2') { return 3; }
    if (fc == '3') { return 2; }
    if (fc == '4') { return 1; }
}

function hesap() {
    var yaz = document.getElementById('fiyat');
    var karar = document.getElementById('eloboost-lp-old').value;
    var ligs1 = document.getElementById('simdikiRutbe').value;
    var ligs2 = document.getElementById('istenilenRutbe').value;
    var lv1 = document.getElementById('eloboost-division-old').value;
    var lv2 = document.getElementById('eloboost-division-new').value;

    var sonuc1 = (lighesap(ligs1) * 4 + fiyatsec(lv1));
    var sonuc2 = (lighesap(ligs2) * 4 + fiyatsec(lv2));

    if (karar == '0') {
        var dizi = lig4.slice(sonuc1, sonuc2);
        var toplam = 0;
        dizi.forEach(function(element) {
            toplam += Number(element);
        });
        yaz.innerHTML = 'FİYAT: ' + toplam + '₺';
    }
    if (karar == '1') {
        var dizi = lig3.slice(sonuc1, sonuc2);
        var toplam = 0;
        dizi.forEach(function(element) {
            toplam += Number(element);
        });
        yaz.innerHTML = 'FİYAT: ' + toplam + '₺';
    }
    if (karar == '2') {
        var dizi = lig2.slice(sonuc1, sonuc2);
        var toplam = 0;
        dizi.forEach(function(element) {
            toplam += Number(element);
        });
        yaz.innerHTML = 'FİYAT: ' + toplam + '₺';
    }
    if (karar == '3') {
        var dizi = lig1.slice(sonuc1, sonuc2);
        var toplam = 0;
        dizi.forEach(function(element) {
            toplam += Number(element);
        });
        yaz.innerHTML = 'FİYAT: ' + toplam + '₺';
    }
}