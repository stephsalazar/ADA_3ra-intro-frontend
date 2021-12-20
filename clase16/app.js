// fetch

/**
 * Metodo propio de JS para  enviar un pedido y obtener información del servidor
 * Conectarnos con otras aplicaciones, bases de datos o servidores
  let variable = fecth(url, [options])

 Metodos: GET, POST, PUT, DELETE

 let pokemon = fetch('https://pokeapi.co/pokemons');

 then(callback): Se ejecuta cuando es satisfactoria la respuesta
 catch(callback): Se ejecuta cuando existe un error
*/

let pikachu = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

pikachu
  .then((response) => {
   return response.json();
  })
  .then((data) => {
    console.log(data)
    const h1 = document.querySelector('h1');
    return h1.innerText = data.name;
  })
  .catch((error) => {console.log(error)})