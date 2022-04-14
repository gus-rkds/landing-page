import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
          <img
            src="https://uploads.strikinglycdn.com/static/icons/app-badges/google-play.png"
            className="img-fluid"
          />
          <img
            src="https://uploads.strikinglycdn.com/static/icons/app-badges/app-store.png"
            className="img-fluid"
          />
        </Container>
      </Container>
    </div>
  );
}

export default DownloadComponent;
