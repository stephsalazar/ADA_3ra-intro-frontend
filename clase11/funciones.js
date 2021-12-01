// Funciones

// FUNCIONES REGULARES

// La palabra reservada: function
// nombre de funcion: nameFunction
// parámetros: (valores)

/*
FUNCIONES NOMBRADAS
  function nameFunction(parametro1, parametro2){
    Instrucciones de codigo a ejecutar
  }

  nameFunction(argumento1, argumento2);
*/

function saludar(){
  alert('Hola, que gusto verte de nuevo');
  console.log('Función simple')
};

function saludarA(nombre){
  alert(`Hola ${nombre}, que bien te ves`);
  console.log('Funcion con parametros');
}

saludar();
saludarA('Cecilia');

/*
FUNCIONES ANÓNIMAS
  Las funcionas anónimas pueden guardarse en variables

  const nameFunction = function(parametro1, parametro2){
    Instrucciones de codigo a ejecutar
  }

  nameFunction(argumento1, argumento2);
*/

const sumaDeDos = function(){
  console.log(2 + 2)
}

const suma = function(num1, num2){
  console.log(num1 + num2);
}

sumaDeDos();
suma(5, 7);

// Funciones como valores:
// Son aquellas que pasan como argumentos

const obtenerNombre = function(){
  const nombre = prompt('Cuál es tu nombre?');

  return nombre;
}

saludarA(obtenerNombre());

// FUNCIONES FLECHA


/* 
  paréntesis para parámetros
  Flecha que sustituye la palabra function
  LLaves que agrupan las lineas a ejecutar

  const nameFunction = () => {}
*/

const resta = (num1, num2) => {
 console.log(num1 - num2);
}

resta(10, 6);

// SCOPE: alcance que van a tener mis indicaciones

const nombreSteph = 'Stephany';

const obtenerApellido = () => {
  const apellido = prompt('Cuál es tu apellido?');

  return apellido;
}

console.log(nombreSteph); // Muestra Stephany
//console.log(apellido); // Muestra error porque no puede encontrar apellido
console.log(obtenerApellido());



/* Parámetros:
  Deben nombrarse adecuadamente siguiendo las mismas bases que variables y funciones
  Los parámetros que no se usan en la ejecución serán ignorados
  Parametros por default son aquellos que si no recbien valor, agarran el definido
*/

const multiplicar = (num1, num2 = 2) => {

  console.log(num1 * num2);
}

multiplicar(5, 4); // Enviando todos los argumentos
multiplicar(7); // Haciendo uso del parámetro por default

const despedida = (name = "Desconocido") => {
  console.log(`Hasta luego, ${name}`);
}

despedida('Talia');
despedida();