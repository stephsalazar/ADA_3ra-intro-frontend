const contiene = (numero, numeros) => {
  // Codigo para buscar si el numero se encuentra dentro del arreglo

  
}

contiene(2, [0, 1, 2, 3]);


const song = {
  title: "Rock and Roll",
  bandName: "Led Zeppelin",
  duration: 166000,
  album: "Led Zeppelin IV",
};

const cancion = {
  titulo: song.title,
  banda: song.bandName,
  duracion: (song.duration / 1000),
};

console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }
