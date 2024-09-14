// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te quiero pero de una forma distinta", time: 15 },
  { text: "Personas como tú se encuentran extintas", time: 18 },
  { text: "Gracias por estar cuando te necesito", time: 27 },
  { text: "Gracias, Dios, por mandarme este angelito", time: 32 },
  { text: "Y no las cobro barato", time: 33 },
  { text: "Quien te lastime, lo mato", time: 41 },
  { text: "No sé, pero contigo puedo llorar y reír", time: 47 },
  { text: "Dekko, yeah", time: 54 },
  { text: "Todos creen que somos pareja", time: 59 },
  { text: "Y esto no es más que una amistad muy vieja", time: 67 },
  { text: "Que se mantiene si alguno se aleja", time: 72 },
  { text: "Nunca hago caso, siempre me aconseja", time: 78 },
  { text: "Y no las cobro barato", time: 83 },
  { text: "Quien te lastime, lo mato", time: 91 },
  { text: "No sé, pero contigo siento que puedo vivir", time: 97 },
  { text: "Yeah", time: 104 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);