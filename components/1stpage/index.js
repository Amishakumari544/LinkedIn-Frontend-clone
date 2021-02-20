import React from "react";
import { Figure, Container, Row, Col } from "react-bootstrap";
import SearchButton from "../../common/button/SearchButton";
function index(props) {
  return (
    <div>
      <div className="container outer_container">
        <div className="home_section">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="home_text">
                  <h1 className="home_title">
                    Welcome to your professional community
                  </h1>
                </div>
                <div className="search_module">
                  <SearchButton
                    title1="Gigs"
                    link1=""
                    title2="Marketplace"
                    link2=""
                    title3="Musician"
                    link3=""
                  />
                </div>
              </Col>
              <Col lg={6}>
                <Figure>
                  <img
                    className="home_img"
                    src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz"
                    alt="home-img"
                  />
                </Figure>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default index;
