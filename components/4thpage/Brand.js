import React from "react";
import { Figure, Container, Row, Col } from "react-bootstrap";
import SearchButton from "../../common/button/SearchButton";
import testimonialimg2 from "../../assets/testimonialimg2.png";
function Brand() {
  return (
    <div>
      <div className="section">
        <div className="outer-container">
          <Container>
            <Row>
              <Col lg={6} md={6}>
                <div className="brand_discovery">
                  <h2 className="brand_title">Who is Music Website for?</h2>
                  <h3 className="brand_subtitle">
                    Anyone looking to navigate their professional life
                  </h3>
                  <div className="search_module">
                    <SearchButton
                      title1="Find new classmate"
                      link1=""
                      title2="Find job"
                      link2=""
                      title3="Find course traning"
                      link3=""
                    />
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <Figure>
                  <img
                    src={testimonialimg2}
                    alt="brand_img"
                    className="brand_img"
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

export default Brand;
