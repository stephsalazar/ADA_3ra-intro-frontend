// Comentario de una línea

/* Comentario de
  multiples
  líneas
*/

/* Tenemos 3 palabras reservadas para almacenar valores:
  - var (Casi  no se usa)
  - let : Permite guardar un valor y cambiarlo en caso de ser necesario
  - const: Permite guardar un valor y no puede volver a modificarse

  Los nombres de las variables:
  - Siempre deben iniciar con letra
  - Siempre se escriben en CamelCase: nombreDeMiVariable
*/

var nombre = 'Ana';
let apellido = 'Salazar';
const nacionalidad = 'Mexicana';


// Operador de asignación: =

let segundoNombre;
segundoNombre = 'Stephany';

apellido = 'Guzmán';

/*
   La consola es una herramienta que nos 
   permite revisar información mientras
   se ejecuta el proyecto

   console.log(Dentro de los parentesis va lo que se quiere evaluar)
*/

console.log('Muestra el nombre', nombre);

/*Tipos de datos:
  String: Textos
  Number: Numeros
  Boolean: True o false
  Undefined: Sin valor definido
  null: NULO
*/

let nombreEstudiante = 'Ada Lovelace';
let saludo = 'Hola querida ';

console.log('Hola querida ' + nombreEstudiante)

console.log('El pequeño conejo nos dice "Adíos"');

let edad = 31;
let edadDeMiMamá = 55;

console.log(edad + edadDeMiMamá);

let prendido = true;
let casado = false;
let puedeVotar = true;

console.log(puedeVotar);

let perrito;

console.log(perrito);

console.log(typeof nombre);

console.log('----------------------------');

/*
  OPERAREDORES ARITMETICOS
  SUMAR +
  RESTAR -
  MULTIPLICAR *
  DIVIDIR /
  Modulo o resto %
*/

let dos = 2;
let cinco = 5;

console.log(dos + dos * cinco); // 12
console.log((dos + dos) * cinco); // 20

// Incremento o decremento: ++ / --

let incremento = 0;
incremento++;

console.log(incremento);

// Operadores lógicos

/* Operador de comparación simple (entrega Boolan como resultado)
    Solo compara valores
    == 
*/

let numero1 = 20;
let numero2 = '20';
let numero3 = 30;

console.log(numero1 == numero2);
console.log(numero1 == numero3);

/* Operador de comparación estricta (entrega Boolan como resultado)
   Compara los vaores y el tipo de dato
  === 
*/

console.log('Comparacion estricta',numero1 === numero2);


// ------------------------ //

/*
  Prompt, nos va a permitir recolectar data del usuario
  prompt(); 

  Dentro de los paréntesis va un texto para que lo lea el usuario
  Las respuestas del prompt, son de tipo string
  */

const nombreUsuario = prompt('Cuál es tu nombre??');
const edadUsuario = prompt('Cuál es tu edad?');

// Template string: Son strings que nos permiten incluir variables
// para ingresar la variable usamos ${_variable_}
const despedida = `Adios ${nombreUsuario} vuelve pronto`;

alert(despedida);


console.log(saludo + nombreUsuario);

console.error('Este es un error');
console.warn('Esta es una advertencia');
console.info('Esta es solo información');

