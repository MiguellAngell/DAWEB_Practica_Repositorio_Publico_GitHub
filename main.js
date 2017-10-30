window.onload = function () {
    inicio()
    mueveReloj()
}

function inicio() {
    /*fecha*/
    var f = new Date();
    var contenedor1 = document.createElement("p");
    var texto1 = document.createTextNode("Fecha " + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
    contenedor1.appendChild(texto1);
    document.body.appendChild(contenedor1);
    /*fecha con dia de la semana y año*/
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    var f2 = new Date();
    var contenedor2 = document.createElement("p");
    var texto2 = document.createTextNode("Hoy es " + diasSemana[f2.getDay()] + ", " + f2.getDate() + " de " + meses[f2.getMonth()] + " de " + f2.getFullYear());
    contenedor2.appendChild(texto2);
    document.body.appendChild(contenedor2);
}

function mueveReloj() {
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    horaImprimible = hora + " : " + minuto + " : " + segundo
    document.form_reloj.reloj.value = horaImprimible
    setTimeout("mueveReloj()", 1000)
}