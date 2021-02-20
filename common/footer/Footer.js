import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="footer_section">
        <Container>
          <Row>
            <Col xl={6} lg={7}>
              <Row>
                <Col sm={4}>
                  {" "}
                  <div className="footer-widget">
                    <h2>About Us</h2>
                    <ul className="list-unstyled">
                      <li>
                        <Link className="link">Lorem2</Link>{" "}
                      </li>
                      <li>
                        <Link className="link">Lorem3</Link>{" "}
                      </li>
                      <li>
                        <Link className="link">Lorem3</Link>{" "}
                      </li>
                    </ul>
                  </div>{" "}
                </Col>
                <Col sm={4}>
                  {" "}
                  <div className="footer-widget">
                    <h2>About Us</h2>
                    <ul className="list-unstyled">
                      <li>
                        <Link className="link">Lorem2</Link>{" "}
                      </li>
                      <li>
                        <Link className="link">Lorem3</Link>{" "}
                      </li>
                      <li>
                        <Link className="link">Lorem3</Link>{" "}
                      </li>
                    </ul>
                  </div>{" "}
                </Col>
                <Col sm={4}>
                  {" "}
                  <div className="footer-widget">
                    <h2>About Us</h2>
                    <ul className="list-unstyled">
                      <li>
                        <Link className="link">Lorem2</Link>{" "}
                      </li>
                      <li>
                        <Link className="link">Lorem3</Link>{" "}
                      </li>
                      <li>
                        <Link className="link">Lorem3</Link>{" "}
                      </li>
                    </ul>
                  </div>{" "}
                </Col>
              </Row>
            </Col>
            <Col xl={6} lg={5}>
              <h2>
                <span>Music</span> Website
              </h2>
              <div className="copyright">
                <Link className="link">
                  Copyright ©2021 ALL RIGHTS RESERVED | <span>Music</span>
                  Website
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
