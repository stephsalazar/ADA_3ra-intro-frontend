// Object.keys, regresa un arreglo con las propiedades del objeto

const persona = {
  nombre: 'Ada',
  apellido: 'Lovelace',
  edad: 30,
  saludar: () => { console.log('Hola, me da gusto verte')},
  esMadre: false
};

const propiedades = Object.keys(persona);

for(let i = 0; i < propiedades.length; i++) {
  let propiedadPersona = propiedades[i];

  console.log(`La propiedad ${propiedadPersona} tiene como valor ${persona[propiedadPersona]}`)
}

// -------------- Ejercicios ----------

const producto = {
  id: 'ADA-020',
  title: 'Gubergren sed est amet voluptua',
  price: 123.75,
  picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
  condition: 'nuevo',
  free_shipping: true,
  location: 'Capital Federal'
};

// completá acá el código
const todasLasPropiedades = Object.keys(producto);
console.log(todasLasPropiedades);

for(let i = 0; i < todasLasPropiedades.length; i++) {
  let propiedad = todasLasPropiedades[i];

  console.log(`producto['${propiedad}'] -> ${producto[propiedad]}`)
}
