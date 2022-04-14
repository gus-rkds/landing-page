import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pic1 from "../public/assets/image-one.png";
import pic2 from "../public/assets/image-two.png";
import pic3 from "../public/assets/image-three.png";

function ServiceComponent() {
  return (
    <div className="service-container-bg">
      <Container className="service-container">
        <Row>
          <Col xs={12} md={4}>
            <Image
              src={pic1}
              className="img-fluid service-img"
              alt="food"
              width={200}
              height={200}
            />
            <h2>Best Offer In Town</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Image
              src={pic2}
              className="img-fluid service-img"
              alt="a delivery man"
              width={200}
              height={200}
            />
            <h2>Fast Delivery</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Image
              src={pic3}
              className="img-fluid service-img"
              alt="a chef"
              width={200}
              height={200}
            />
            <h2>Quality Food</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default ServiceComponent;
