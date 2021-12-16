// el método _onload_, se va a ejecutar cuando el documento se ha 
// cargado correcta y completamente


const init = () => {
/*Para interactuar con el DOM (document) tenemos
 distintos métodos para obtener los elementos:
 */

  // A través de ID
  const parrafo = document.getElementById('parrafoSimple');

  // A través de la etiqueta
  const etiquetaLI = document.getElementsByTagName('li');

  // A través del atributo class
  const claseSeccion = document.getElementsByClassName('seccion');
  
  // A través de cualquier selector de CSS (Solo regresa un elemento)
  const h1 = document.querySelector('.seccion');

  // A través de cualquier seletor de CSS (Devuelve todos)
  const todosLosLI = document.querySelectorAll('li');

  //---------------------
  // Una vez que tenemos los elementos podemos ver sus atributos
  
  // Una lista de todos
  const atributosParrafo = parrafo.attributes;

  // Un solo atributo
  const atributoClaseParrafo = parrafo.getAttribute('class');
  const atributoIdParrafo = parrafo.id;

  // ----------------
  // ClassList (Nos permite trabajar con las clases de cada elemento)
    const parrafoPrincipal = document.getElementById('principal');

    // agregamos la clase ocultar
    parrafoPrincipal.classList.add('ocultar');

    // como tenía la clase ocultar con toggle lo sacamos
    parrafoPrincipal.classList.toggle('ocultar');
    // como ya no la tiene, se la agrega nuevamente
    parrafoPrincipal.classList.toggle('ocultar');

    // sacamos la clase negrita
    parrafoPrincipal.classList.remove('negrita');

    // Retorna rojo que es la primer clase que tiene este elemento
    parrafoPrincipal.item(0);

    // Retorna true ya que el elemento tiene la clase rojo
    parrafoPrincipal.contains('rojo');

    // cambiamos la clase rojo por verde
    parrafoPrincipal.replace('rojo', 'verde');

}



document.onload = init();