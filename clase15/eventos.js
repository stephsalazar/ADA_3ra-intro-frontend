const cambioApariencia = () => {
  const parrafoPrincipal = document.getElementById('principal');
  parrafoPrincipal.innerText = 'Cambia cuando el cursor pasa por el otro parrafo';
  parrafoPrincipal.classList.toggle('principal');
}

const crearSaludo = () => {
  const inputNombre = document.querySelector('input').value;
  const h3 = document.getElementById('nombreUser');
  h3.innerText = `Hola ${inputNombre}, te doy la bienvenida`;
  h3.classList.toggle('background');
}

const init = () => {
  // Eventos: Son actos o sucesos que se desencadenan
  // luego de alguna acción

  // Modificar el texto de algun elemento (innerText)
  const parrafoSimple = document.getElementById('parrafoSimple');
  console.log('Valor antes del cambio: ', parrafoSimple.innerText);
  parrafoSimple.innerText = 'Texto modificado desde JS';
  
  const button = document.querySelector('button');

  /* Agregar un evento a un elemento:
    AddEventListener, requiere dos argumentos:
    - evento que va a detonar las acciones
    - funcion que ejecutara dichas acciones
    
    elemento.addEventListener('_evento_', () => {Sentencias a realizar})

    La segunda forma de agregar eventos es desde la propiedad del elemento
    elemento.onclick = () => { Sentencias a realizar } 

    (Como ejemplo tenemos el document.onload = init();)
  */

  button.addEventListener('click', crearSaludo);

  parrafoSimple.addEventListener('mouseover', cambioApariencia);  
};

document.onload = init();

// document.onload = () => {
//   alert('Hola, esto funciona')
// }

// document.addEventListener('load', init());

// document.addEventListener('load', () => {
//   alert('Hola, esto funciona desde el AddEvenetListener')
// });