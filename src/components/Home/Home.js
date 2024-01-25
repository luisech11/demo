import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useSpring, animated } from "react-spring";

function Home() {
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <animated.h1 style={headerAnimation} className="heading">
                Hola!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </animated.h1>

              <animated.h1 style={headerAnimation} className="heading-name">
                Somos <strong className="main-name">Jose Maria Music</strong>
              </animated.h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <animated.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  borderRadius: "50%",
                  ...imageAnimation, // Aplica la animación a la imagen
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
