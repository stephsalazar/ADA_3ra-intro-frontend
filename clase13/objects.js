// Objetos:

/* 
  Un objeto es un  tipo de dato compuesto o complejo,
    que se forma a través de llaves y comas. Su estructura esta formada
    por un propiedad y su valor

    sintaxis:
    {} Objeto vacío
    {propiedad1: valor1, propiedad2: valor2} Objeto con propiedades
    {
      propiedad1: valor1,
      propiedad2: valor2,
      propiedad3: valor3,
    }

    Podemos acceder a la propiedad de un objeto utilizando
    el nombre del objeto, punto y el nombre de la propiedad
    objetoName.propiedad

*/

const alumna = {
  nombre: 'Ada Lovelace',
  edad: 0,
  nacionalidad: '',
  cursoBackend: false,
};

console.log(alumna.nombre);
alumna.edad = 30;

console.log('Primer cambio', alumna);

alumna.graduada = true;

console.log('Segundo cambio', alumna);


// Crear un objeto _automovil_ con las propiedades:
// marca, modelo, año, tieneSeguro
// Datos ingresados por el usuario
// Pintar en consola el objeto creado

const marca = prompt('Qué marca es tu auto?');
const modelo = prompt('Qué modelo es tu auto?');
const año = parseInt(prompt('Qué año es tu auto?'));
let tieneSeguro = prompt('Tienes asegurado tu auto?');

if(tieneSeguro == 'si'){
  tieneSeguro = true;
}else{
  tieneSeguro = false;
};

const automovil = {
  marca: marca,
  modelo: modelo,
  año: año,
  tieneSeguro: tieneSeguro,
}

console.log(automovil);

const vehicle = {
  "name": "Snowspeeder",
  "model": "t-47 airspeeder",
  "manufacturer": "Incom corporation",
  "cost_in_credits": "unknown",
  "length": "4.5",
  "max_atmosphering_speed": "650",
  "crew": "2",
  "passengers": "0",
  "cargo_capacity": "10",
  "consumables": "none",
  "vehicle_class": "airspeeder",
  "pilots": {
    piloto1: "https://swapi.dev/api/people/1/",
    piloto2: "https://swapi.dev/api/people/18/"
  },
  "films": [
    "https://swapi.dev/api/films/2/"
  ],
  "created": "2014-12-15T12:22:12Z",
  "edited": "2014-12-20T21:30:21.672000Z",
  "url": "https://swapi.dev/api/vehicles/14/"
}

// Obtener la url de la pelicula en la que aparece
// console.log() = https://swapi.dev/api/films/2/

alert(vehicle.pilots);
alert(vehicle.pilots.piloto1);

console.log('FILM', vehicle.films[0]);