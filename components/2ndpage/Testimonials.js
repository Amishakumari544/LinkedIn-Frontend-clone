import React from "react";
import { Figure, Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import testimonialimg1 from "../../assets/testimonialimg1.png";
import testimonialimg2 from "../../assets/testimonialimg2.png";
function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div>
        <div className="testimonial">
          <Slider {...settings}>
            <Container>
              <Row>
                <Col lg={7}>
                  <div className="testimonial_content">
                    <h2>
                      Let the right people know you’re open to work tomorrow
                    </h2>
                    <p>
                      With the Open To Work feature, you can privately tell
                      recruiters or publicly share with the LinkedIn community
                      that youre looking for new job opportunities
                    </p>
                  </div>
                </Col>
                <Col lg={5}>
                  <Figure>
                    <img
                      src={testimonialimg2}
                      className="testimonial_img"
                      alt="testimonialimg2"
                    />
                  </Figure>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col lg={7}>
                  <div className="testimonial_content">
                    <h2>
                      Conversations today could lead to opportunity tomorrow
                    </h2>
                    <p>
                      Sending messages to people you know is a great way to
                      strengthen relationships as you take the next step in your
                      career
                    </p>
                  </div>
                </Col>
                <Col lg={5}>
                  <Figure>
                    <img
                      src={testimonialimg1}
                      className="testimonial_img"
                      alt="testimonialimg1"
                    />
                  </Figure>
                </Col>
              </Row>
            </Container>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
