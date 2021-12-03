// Condicionales van a modificar el flujo de nuestro programa

/*
  "if"
Palabra reservada _if_, paréntesis para evaluar condición
y las llaves que agrupan las ejecicuiones
  if(condición){ejecuciones}

  ----------------------------
"if-else"
Palabra reservada _if_, paréntesis para evaluar condición
y las llaves que agrupan las ejecicuiones
  if(condición){ejecuciones}; Palabra reservada _else_
  y llaves que agrupen las ejecuciones
  
  if(condicion){
    ejecuciones
  }else{otras ejecuciones}
 
  -----------------------------

  Condiciones de igualdad
  > mayor qué
  >= mayor o igual que
  < menor que
  <= menor o igual que
  != diferente de 
  == igual a
  === estrictamente igual (valor y tipo de dato)

  Operdores lógicos:
  && : Evaluar que todas las condiciones sean verdaderas
  || : Evalua que por lo menos alguna condicion sea verdadera
*/

const mayorEdad = () => {
  // Verificar si el usuario tiene 18 años o más
  console.log('Inicia la función');
  const edad = prompt("Indicanos tu edad. Por favor");
  
  if(edad >= 18) {
    alert("Bienvenido a nuestra web");
  } else {
    alert("Aun no tienes la mayoría de edad");
  }

  // if(edad >= 18){
  //   return alert("Bienvenido a nuestra web");
  // }
  // alert("Aun no tienes la mayoría de edad");

  console.log('Termina la función');
};

// mayorEdad();

const diferenciaEdades = () => {
  // Verificar la edad del usuario y enviar
  // un mensaje segun sea el caso
  const edadUsuario = prompt('Por favor, ingresa tu edad');

  if(edadUsuario < 18){
    alert('Aun eres pequeño');
  }else if(edadUsuario == 18){
    alert('Bienvenido a la mayoría de edad');
  }else {
    alert('Tu ya eres mayor');
  }
};

// diferenciaEdades();

const licenciaConducir = () => {
  // Probar && y ||
  const edad = prompt('Indicanos tu edad');

  if (edad > 15 && edad < 18) {
    alert('Puede tener permiso de conducir');
  }else if (edad == 18 || edad > 18 ) {
    alert('Tramita tu licencia de conducir');    
  }else {
    alert('Aun eres joven para conducir');
  }
}

// licenciaConducir();

// ----------------------

/* Bloques: Estructuras de código que nos van a permitir,
  repetir una misma acción una cantidad definida de veces
  
  Palabra reservada _while_, parentesis que evaluan
  que la condicion sea verdadera, llaves que agrupan las tareas a ejecutar 

  while(condición){sentencias}

  ¡¡ES IMPORTANTE QUE EN ALGUN PUNTO LA CONDICION SE VUELVA FALSA,
  PARA QUE NO EJECUTE LAS SENTENCIAS DE FORMA INFINITA!!
  */


const imprimirNumeros = () => {
  // Imprimir en la consola los numeros de forma ciclica
  let limite = 0;

  while (limite <= 10) {
    
    console.log('Esta es la vuelta ', limite);

    // if(limite > 8){
    //   console.log('el numero ya es 9 y corta la ejecución')
    //   break;
    // }
    
    limite++;
  }
};

imprimirNumeros();