import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Ejemplo de texto sin <span className="purple">Ejemplo de texto sin</span>
            from <span className="purple"> Ejemplo de texto sin,Ejemplo de texto sin</span>
            <br /> Ejemplo de texto sinEjemplo de texto sinEjemplo de texto sinEjemplo de texto sin(IMSc)
            Ejemplo de texto sin
            <br />
            Ejemplo de texto sin
            Ejemplo de texto sin
            <br />
            <br />
            Ejemplo de texto sin
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ejemplo de texto
            </li>
            <li className="about-activity">
              <ImPointRight />Ejemplo de texto
            </li>
            <li className="about-activity">
              <ImPointRight /> Ejemplo de texto
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ejemplo de texto sin"{" "}
          </p>
          <footer className="blockquote-footer">Ejemplo de texto sin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
