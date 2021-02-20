import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { FaAngleDown } from "react-icons/fa";
import data from "../../common/FakeData/FakeButtonData";

function Index() {
  const [visible, setVisible] = useState(7);
  const [loadval, setloadval] = useState(true);

  const loadmore = () => {
    setloadval(true);
    setVisible(50);
  };

  const loadless = () => {
    setloadval(false);
    setVisible(7);
  };
  return (
    <div>
      <div className="section">
        <div className="finder">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="finder_text">
                  <h1 className="finder_title">
                    Find open jobs and internships
                  </h1>
                </div>
              </Col>
              <Col lg={6}>
                <div className="align_list">
                  <h2>SUGGESTED SEARCHES</h2>
                  <ul className="finder_list list-unstyled">
                    {data.slice(0, visible).map((data) => (
                      <li>
                        <Link to="" className="finder_pill">
                          {data.user}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {loadval === false ? (
                    <Button onClick={loadmore}>
                      Show More <FaAngleDown />
                    </Button>
                  ) : (
                    <Button onClick={loadless}>Show Less</Button>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Index;
