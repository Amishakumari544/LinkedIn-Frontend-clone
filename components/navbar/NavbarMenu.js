import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavbarMenu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="like" variant="dark">
        <Navbar.Brand href="#home" className="clearfix">
          LinkedIn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="align-btn">
            <Link className="btn m-0">Join With Resume</Link>
            <Link className="btn">Join Now</Link>
            <button type="button" class="btn btn-light btn-rounded signin-btn">
              Sign In
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
