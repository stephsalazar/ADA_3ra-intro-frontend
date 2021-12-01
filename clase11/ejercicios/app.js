// Crear una función esPar que tome como argumento un número y
// devuelva true si dicho números es par o false si no lo es

// const esPar = (numero) => {
//   if(numero % 2  === 0){
//     return true;
//   }

//   if(numero % 2 !== 0){
//     return false;
//   }
// }

const esPar = (numero) => {
  if(numero % 2 !== 0){
    return alert('Tu número es impar ' + false);
  }

  return alert('Tu número es par ' + true);;
}

const esParDatoUsuario = () => {
  const numero = parseInt(prompt('Ingresa el numero para saber si es par o no'));
  
  if(numero % 2 !== 0){
    return alert('Tu número es impar ' + false);
  }

  return alert('Tu número es par ' + true);
}


// Si(condicion se cumple){Realiza lo de aqui dentro}
// if(){}

console.log(esPar(10));
console.log(esPar(7));

console.log(esParDatoUsuario());