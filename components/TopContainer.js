import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import picmobile from "../public/assets/mobile.png";
import picplate2 from "../public/assets/plate-two.png";
import picplate3 from "../public/assets/plate-three.png";
import Image from "next/image";

function TopContainer() {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={12} md={6} className="section-top-left">
              <Image
                className="img-fluid"
                src={picmobile}
                alt="a mobile"
                width={500}
                height={500}
              />
            </Col>
            <Col xs={12} md={6} className="section-top-right shadow">
              <div className="plate-img-container">
                <Image
                  className="plate-img img-fluid"
                  src={picplate2}
                  alt="a plate"
                  width={100}
                  height={100}
                />
                <Image
                  className="plate-img img-fluid"
                  src={picplate3}
                  alt="another plate"
                  width={100}
                  height={100}
                />
              </div>
              <h6>FOODO</h6>
              <h2>Get Your Food In</h2>
              <h1>FOODO</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
              <button className="btn btn-custom">Download App</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TopContainer;
