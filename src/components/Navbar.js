import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, actualizarEstadoExpansion] = useState(false);
  const [colorNav, actualizarColorNav] = useState(false);

  function manejadorScroll() {
    if (window.scrollY >= 20) {
      actualizarColorNav(true);
    } else {
      actualizarColorNav(false);
    }
  }

  window.addEventListener("scroll", manejadorScroll);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={colorNav ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="marca" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            actualizarEstadoExpansion(expand ? false : "expandido");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => actualizarEstadoExpansion(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => actualizarEstadoExpansion(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Acerca de
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => actualizarEstadoExpansion(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Proyectos
              </Nav.Link>
            </Nav.Item>

            


            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/luisech11"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
