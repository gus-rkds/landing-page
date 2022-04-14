import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import picabout from "../public/assets/image-about.png";

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Image
              src={picabout}
              className="img-fluid"
              alt="mobile"
              width={200}
              height={200}
            />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2>Best Offer In Town</h2>
              <b>Lorem ipsum, or lipsum as it is sometimes known,</b>
              <br />
              <br />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Ciceros De Finibus Bonorum et
                Malorum for use in a type specimen book.
              </p>
              <button className="btn btn-custom">Explore More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
