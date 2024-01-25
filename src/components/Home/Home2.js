import React from "react";

//PARTE DE ARRIBA DE LA PAGINA HOME
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTANME <span className="purple">PRESENTARNOS</span>
            </h1>
            <p className="home-about-body">
              Nos hemos enamorado de la música católica y hemos aprendido al menos algo, ¡creemos...! 
              <br />
              <br />Somos expertos en construir y 
              <i>
                <b className="purple"> fortalecer tu fe! </b>
              </i>
              <br />
              <br />
              José Miguel y Aura María son músicos experimentados cuyas almas resuenan con pasión por Dios y su música católica, creando melodías que elevan los corazones y fortalecen la fe
              <i>
                <b className="purple"></b>, {" "}
                <b className="purple">Somos El alma de Dios.</b>
              </i>
              <br />
              <br />
              José Miguel y Aura María, un talentoso dúo de músicos católicos, han dedicado sus vidas a expresar su profunda devoción a Dios a través de su música. Con años de experiencia y una pasión inquebrantable, su arte es un reflejo conmovedor de su fe, tocando los corazones de quienes escuchan con melodías que trascienden lo terrenal y llevan <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}

                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple">la espiritualidad a nuevas alturas</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-full" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRANOS EN</h1>
            <p>
              Siéntete libre de <span className="purple">conectarte</span> con nosotros
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/joseymaria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/JoseyMaria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joseymaria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/joseymaria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
