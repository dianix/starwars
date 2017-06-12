var cargarPagina = function () {
    cargarPersonajes();

};

var cargarPersonajes = function () {
    var url = "http://swapi.co/api/people/";
    $.getJSON(url, function (response) {
        var personajes = response.results;
        var total = response.count;
        mostrarTotalPersonajes(total);
        mostrarPersonajes(personajes);
    })
};

var mostrarTotalPersonajes = function (total) {
    $("#total").text(total)
};

var mostrarPersonajes = function (personajes) {
    var $ul = $("#personajes");
    personajes.forEach(function (personaje) {
        var $li = $("<li/>");
        $li.text(personaje.name + " - " + personaje.height + " cm");
        $ul.append($li)
        console.log(personaje.name)
    })
};

$(document).ready(cargarPagina);

/*var cargarPersonajes = function () {
    //$.ajax sirve para hacer diversos tipos de peticiones .get es uno específico
    $.ajax("http://swapi.co/api/people/", {
        method: "GET",
        dataType: "json",
        success: function (response) {
            //console.log("respuesta",response)
            var personajes = response.results;
            var total = response.count;
            mostrarTotalPersonajes(total)
            mostrarPersonajes(personajes);
        },
        error: function (error) {
            //console.log("error",error)
        }
    })
}*/
