import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Musica catolica",
          "Musica clasica interpretativa",
          "Clases de teoria Musical",
          "Guitarra clasica",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        typeSpeed: 1, // Ajusta la velocidad de escritura aquí (en caracteres por minuto)
      }}
    />
  );
}
//PARTE DE LAS LETRAS DE ESCRITURA AUTO
export default Type;
