function httpGet(theUrl, callback) {

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl);

    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")

    xmlHttp.send();
}

function consultarDatos(city) {


    let tempActual = []
    for (i = 0; i < city.consolidated_weather.length; i++) {
        tempActual.push(city.consolidated_weather[i].the_temp)
    }
    document.querySelectorAll("input")[0].value = tempActual[0]

    let tempMaxima = []
    for (i = 0; i < city.consolidated_weather.length; i++) {
        tempMaxima.push(city.consolidated_weather[i].max_temp)
    }
    document.querySelectorAll("input")[1].value = tempMaxima[0]

    let tempMinima = []
    for (i = 0; i < city.consolidated_weather.length; i++) {
        tempMinima.push(city.consolidated_weather[i].min_temp)
    }
    document.querySelectorAll("input")[2].value = tempMinima[0]
    
    let humedad = []
    for (i = 0; i < city.consolidated_weather.length; i++) {
        humedad.push(city.consolidated_weather[i].humidity)
    }
    document.querySelectorAll("input")[3].value = humedad[0]

}

function imprime(texto) {
    let city = JSON.parse(texto);
    consultarDatos(city)
}


//England

let datosLondon = document.querySelector("#london")
datosLondon.addEventListener("click", function () {

    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/", imprime)
}
)
let datosBirmingham = document.querySelector("#birmingham")
datosBirmingham.addEventListener("click", function () {

    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/12723/", imprime)
}
)
let datosManchester = document.querySelector("#manchester")
datosManchester.addEventListener("click", function () {

    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/28218/", imprime)
}
)
let datosLiverpool = document.querySelector("#liverpool")
datosLiverpool.addEventListener("click", function () {

    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/26734/", imprime)
}
)

//France

let datosParis = document.querySelector("#paris")
datosParis.addEventListener("click", function () {

    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/615702/", imprime)
}
)
let datosLyon = document.querySelector("#lyon")
datosLyon.addEventListener("click", function () {

    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/609125/", imprime)
}
)
let datosMarseille = document.querySelector("#marseille")
datosMarseille.addEventListener("click", function () {

    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/610264/", imprime)
}
)



//web api --> https://www.metaweather.com/es/23424829/


