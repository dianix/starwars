var cargarPagina = function () {
    cargarPersonajes();
    $("body").on("click",".personaje", mostrarDetalles)
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
        $li.addClass("personaje");
        $li.text(personaje.name + " - " + personaje.height + " cm");
        $li.attr("data-url",personaje.homeworld);
        $ul.append($li)
        console.log(personaje.name)
    })
};

var planetaPlantilla = '<div id="detalle-planeta">'+
                            '<h2>Planeta: </h2>'+
                            '<p><strong>Nombre:</strong>__nombre__</p>'+
                            '<p><strong>Clima:</strong>__clima__</p>'+
                        '</div>';

var mostrarDetalles = function(){
    var url = $(this).data("url");
    var $planetaContenedor = $("#detalle-planeta")
    $.getJSON(url,function(response){
        $planetaContenedor.html(planetaPlantilla.replace("__nombre__",response.name)
        .replace("__clima__",response.climate));
        
        console.log(response)
    
    })
    //console.log($(this).data("url"))
    
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
