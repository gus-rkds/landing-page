import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import apple from "../public/assets/apple.png";
import google from "../public/assets/google-play.png";

function DownloadComponent() {
  return (
    <div className="download-container-bg">
      <Container className="download-component">
        <h3>Get Food With Foodo</h3>
        <h3>Download The App</h3>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print,
        </p>
        <Container className="img-download">
          <Image
            src={apple}
            className="img-fluid"
            alt="google-play"
            width={200}
            height={200}
          />
          <Image
            src={google}
            className="img-fluid"
            alt="apple-store"
            width={200}
            height={200}
          />
        </Container>
      </Container>
    </div>
  );
}

export default DownloadComponent;
