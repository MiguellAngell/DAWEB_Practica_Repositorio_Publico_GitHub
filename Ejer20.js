window.onload = function () {
    IExplorador();
}

function IExplorador() {
    // document.getElementById("Nnavegador").innerHTML = "es " + navigator.appCodeName;
    if (navigator.appName == "Netscape") {
        if (navigator.appVersion.indexOf("Chrome") != -1) {
            document.getElementById("Nnavegador").innerHTML = navigator.appVersion;
            document.getElementById("imagen").src = "Imagenes/chrome.jpg";
        }
        else {
            document.getElementById("Nnavegador").innerHTML = navigator.appVersion;
            document.getElementById("imagen").src = "Imagenes/firefox.jpg";
        }
    }
    else {
        document.getElementById("imagen").src = "Imagenes/intenet explorer.jpg";
    }
}