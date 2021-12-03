//Crear una función _aceptaDeposito_ que tome como argumento
// un número _monto_ y devuelva true si el monto es divisible por 10
// o false si no lo es

const aceptaDeposito = (monto) => {
  if (monto % 10 === 0) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true
 
console.log('-------------------')

/*
Crear una función _sumarImparesHasta_ que tome como
argumento un número _numero_ y que devuelva la suma
de todos los impares empezando desde 0 hasta dicho numero inclusive.
*/

const sumarImparesHasta = (numero) => {
  let contador = 0;
  let sumaTotal = 0; // Aquí vamos a ir sumando los impares

  while (contador <= numero) {
    // Saber si el numero es impar
    if(contador % 2 != 0){
      // si es impar sumarlo al total, si es par ignorarlo
      sumaTotal += contador;
    }
      
    // Incremetar el límite en cada vuelta
    contador++
  }

  return console.log(sumaTotal);
} 

sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576