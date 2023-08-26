import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logos from "../../assets/images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="myLogo"
            src={logos}
            alt="logo"
            width="80"
            height="80"
          />
          <span className="logo-header">Bored Tunnelers</span>
        </Navbar.Brand>

        <div className={`mobile-nav ${showDrawer ? "open" : ""}`}>
          <Nav className="mobile-nav-links">
            <Nav.Link href="#home">
              {" "}
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#our-story">
              <Link to="/test">Our Story</Link>
            </Nav.Link>
            <Nav.Link href="#teams">
              <Link to="/team">Team</Link>
            </Nav.Link>
            <Nav.Link href="#partners">
              <Link to="/test">Partners</Link>
            </Nav.Link>
            <Nav.Link href="#technology">
              <Link to="/test">Technology</Link>
            </Nav.Link>
            <Nav.Link href="#news">
              <Link to="/test">News</Link>
            </Nav.Link>
          </Nav>
        </div>
        <button className="drawer-toggle" onClick={toggleDrawer}>
          ☰
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;
