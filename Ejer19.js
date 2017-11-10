window.onload = function () {
    var Nfrase = 5;
    var Nimagen = 3;
    frase(Nfrase);
    imagen(Nimagen);
}

function frase(numero) {
    var AFrases = ["Frase 1", "Frase 2", "Frase 3", "Frase 4", "Frase 5", "Frase 6", "Frase 7", "Frase 8", "Frase 9", "Frase 10"];
    setInterval(function () {
        Cfrases(AFrases, numero);
    }, 3000);
}

function imagen(numero) {
    var AImagenes = ["Imagenes/1.jpg", "Imagenes/2.jpg", "Imagenes/3.jpg", "Imagenes/4.jpg", "Imagenes/5.jpg"];
    setInterval(function () {
        CImagenes(AImagenes, numero);
    }, 3000);
}

function CImagenes(AImagenes, numero) {
    document.getElementById("Imagenes").src = "";
    var tam = AImagenes.length;
    var NAImagenes = new Array();
    var indice = 0;
    do {
        var NImagen = AImagenes[parseInt(Math.random() * tam)];
        if (NAImagenes.indexOf(NImagen) != -1) {
            continue;
        }
        else {
            NAImagenes[indice] = NImagen;
            indice++;
        }
    } while (NAImagenes.length < numero);
    for (i = 0; i < NAImagenes.length; i++) {
        document.getElementById("Imagenes").src = NAImagenes[i];
    }
}

function Cfrases(AFrases, numero) {
    document.getElementById("Frases").innerHTML = "";
    var tam = AFrases.length;
    var NAfrases = new Array();
    var indice = 0;
    do {
        var NFrase = AFrases[parseInt(Math.random() * tam)];
        if (NAfrases.indexOf(NFrase) != -1) {
            continue;
        }
        else {
            NAfrases[indice] = NFrase;
            indice++;
        }
    } while (NAfrases.length < numero);
    for (i = 0; i < NAfrases.length; i++) {
        document.getElementById("Frases").innerHTML += "|| " + NAfrases[i] + " || ";
    }
}