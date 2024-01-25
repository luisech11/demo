import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  const particleOptions = {
    particles: {
      number: {
        value: 100, // Aumenta la cantidad de partículas
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#FF5733", "#33FFB8", "#334DFF"], // Colores relacionados con la música
      },
      shape: {
        type: "char", // Usar caracteres personalizados
        character: {
          value: "♩", // Nota musical como carácter
          font: "Arial", // Fuente personalizada
        },
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 10, // Aumenta este valor para hacer que las notas musicales sean más grandes
        random: true,
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: false,
        },
        resize: true,
      },
    },
    retina_detect: true,
  };

  return (
    <Particles
      id="tsparticles"
      options={particleOptions}
    />
  );
}

export default Particle;
