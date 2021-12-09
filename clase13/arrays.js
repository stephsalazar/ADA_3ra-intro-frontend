// Arrays o Arreglos

/* Un array es un  tipo de dato compuesto o complejo,
    que se forma a traves de corchetes y comas

    sintaxis:
    [ ] Array vacío
    [elemento1, elemento2, elemento3] Array con 3 elementos

    asignando el arreglo a _const_ no puedo modificar o
    cambiar el tipo de dato, pero si el contenido del mismo

    let playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

    let datos = [
      'Ada',
      42,
      true,
      null,
      function() { console.log('¡hola!') }
    ];

    cada espacio ocupado en nuestro array es un indice
    Los indices se inician a contar en 0

    Para acceder a los elementos del array utilizamos el índice
    nombreDelArreglo[numeroIndice] esto devuelve el valor de lo que guarda
*/

// otra forma de escribir esto puede ser:
const playlist = [
  'Smells Like Teen Spirit',
  'Come As You Are',
  'Heart-Shaped Box',
  'Lithium',
  'ultimo',
];

let datos = [
  'Ada',
  42,
  true,
  null,
  function() { console.log('¡hola!') }
];

console.log(playlist[0]); // 'Smells Like Teen Spirit'
console.log(playlist[4]); // 'ultimo'
console.log(datos[0]); // 'Ada'
console.log(datos[2]); // true

const nombre = datos[0];
const edad = datos[1];
const esProgramadora = datos[2];
const miVariable = datos[3];
const saludar = datos[4];

console.log(nombre);
console.log(edad);
console.log('programadora?:', esProgramadora);
console.log(miVariable);
saludar(); // muestra en consola hola

// guardar elementos a través del índice

datos[5] = 'calle dudadosa #25, Argentina';

console.log('Observar array', datos);

// Crear un arreglo con mis propios datos para
// despues asignarlos en variables

const steph = [
  'Ana Stephany',
  31,
  'developer',
  'Mexicana',
];

const name = steph[0];
const age = steph[1];
const profession = steph[2];
const nationality = steph[3];


// Asignar en un arreglo _datosUsuario_ los datos ingresados por un usuario

// Datos: Nombre, edad, profesión, nacionalidad

const datosUsuario = [];

const nameUser = prompt('Cuál es tu nombre?');
const ageUser = prompt('Cuál es tu edad?');
const professionUser = prompt('A qué te dedicas?');
const nationalityUser = prompt('Cuál es tu nacionalidad?');

datosUsuario[0] = nameUser;
datosUsuario[1] = ageUser
datosUsuario[2] = professionUser;
datosUsuario[3] = nationalityUser;

console.log('Array con datos del usuario', datosUsuario);