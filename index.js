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
    document.querySelectorAll("input")[0].value = Math.round(tempActual[0])

    let tempMaxima = []
    for (i = 0; i < city.consolidated_weather.length; i++) {
        tempMaxima.push(city.consolidated_weather[i].max_temp)
    }
    document.querySelectorAll("input")[1].value = Math.round(tempMaxima[0])

    let tempMinima = []
    for (i = 0; i < city.consolidated_weather.length; i++) {
        tempMinima.push(city.consolidated_weather[i].min_temp)
    }
    document.querySelectorAll("input")[2].value = Math.round(tempMinima[0])

    let humedad = []
    for (i = 0; i < city.consolidated_weather.length; i++) {
        humedad.push(city.consolidated_weather[i].humidity)
    }
    document.querySelectorAll("input")[3].value = Math.round(humedad[0]) + "%"

}

function imprime(texto) {
    let city = JSON.parse(texto);
    consultarDatos(city)
}


//England

let datosLondon = document.querySelector("#london")
datosLondon.addEventListener("click", function () {
    showPicture("london")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/", imprime)
}
)
let datosBirmingham = document.querySelector("#birmingham")
datosBirmingham.addEventListener("click", function () {
    showPicture("birmingham")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/12723/", imprime)
}
)
let datosManchester = document.querySelector("#manchester")
datosManchester.addEventListener("click", function () {
    showPicture("manchester")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/28218/", imprime)
}
)
let datosLiverpool = document.querySelector("#liverpool")
datosLiverpool.addEventListener("click", function () {
    showPicture("liverpool")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/26734/", imprime)
}
)

//France

let datosParis = document.querySelector("#paris")
datosParis.addEventListener("click", function () {
    showPicture("paris")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/615702/", imprime)
}
)
let datosLyon = document.querySelector("#lyon")
datosLyon.addEventListener("click", function () {
    showPicture("lyon")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/609125/", imprime)
}
)
let datosMarseille = document.querySelector("#marseille")
datosMarseille.addEventListener("click", function () {
    showPicture("marseille")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/610264/", imprime)
}
)

//Germany

let datosBerlin = document.querySelector("#berlin")
datosBerlin.addEventListener("click", function () {
    showPicture("berlin")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/638242/", imprime)
}
)
let datosFrankfurt = document.querySelector("#frankfurt")
datosFrankfurt.addEventListener("click", function () {
    showPicture("frankfurt")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/650272/", imprime)
}
)
let datosMunich = document.querySelector("#munich")
datosMunich.addEventListener("click", function () {
    showPicture("munich")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/676757/", imprime)
}
)
let datosDusseldorf = document.querySelector("#dusseldorf")
datosDusseldorf.addEventListener("click", function () {
    showPicture("dusseldorf")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/646099/", imprime)
}
)

//Greece

let datosAthens = document.querySelector("#athens")
datosAthens.addEventListener("click", function () {
    showPicture("athens")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/946738/", imprime)
}
)
let datosSantorini = document.querySelector("#santorini")
datosSantorini.addEventListener("click", function () {
    showPicture("santorini")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/56558361/", imprime)
}
)

//Italy

let datosRome = document.querySelector("#rome")
datosRome.addEventListener("click", function () {
    showPicture("rome")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/721943/", imprime)
}
)
let datosVenice = document.querySelector("#venice")
datosVenice.addEventListener("click", function () {
    showPicture("venice")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/725746/", imprime)
}
)
let datosMilan = document.querySelector("#milan")
datosMilan.addEventListener("click", function () {
    showPicture("milan")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/718345/", imprime)
}
)

//Spain

let datosBarcelona = document.querySelector("#barcelona")
datosBarcelona.addEventListener("click", function () {
    showPicture("barcelona")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/753692//", imprime)
}
)
let datosMadrid = document.querySelector("#madrid")
datosMadrid.addEventListener("click", function () {
    showPicture("madrid")
    httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/766273/", imprime)
}
)

function showPicture(city) {
    document.querySelector("#cityPic").innerHTML = "<img id='image" + city + "' src='assets/" + city + ".jpg' width='100%' height='100%'/>"

}

//imagen

// function añadirImagen() {
//     let imagen;
//     if ()
// }


// let imagen;

// if (document.querySelector("#barcelona") == "Barcelona"){
//     imagen ="assets/imagen2.jpg"
// }else if (document.querySelector("#madrid") == "Madrid"){
//     imagen="assets/imagen3.jpg"

// }

// let imgCity = document.querySelector("#resultadoImagen")
// imgCity.src = imagen











//web api --> https://www.metaweather.com/es/23424829/


