import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Nuestros Proyectos <strong className="purple">Musicales</strong>
        </h1>
        <p style={{ color: "white" }}>
          Todo Dedicado a Dios
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TITULO PENDIENTE"
              description="Bla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla bla."
              ghLink="https://github.com/luisech11"
              demoLink="https://www.google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TITULO PENDIENTE"
              description="Bla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla bla."
              ghLink="https://github.com/luisech11"
              demoLink="https://www.google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TITULO PENDIENTE"
              description="Bla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla bla"
              ghLink="https://github.com/luisech11"
              demoLink="https://www.google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TITULO PENDIENTE"
              description="Bla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla bla."
              ghLink="https://github.com/luisech11"
              demoLink="https://www.google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="TITULO PENDIENTE"
              description="Bla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla bla."
              ghLink="https://github.com/luisech11"
              demoLink="https://www.google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="TITULO PENDIENTE"
              description="Bla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla blaBla bla bla bla bla bla balb alb alb albla bla"
              demoLink="https://www.google.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
