import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode, SiPowerbi, SiJupyter } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>VS Code</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p>Power BI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <p>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p>Jupyter</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
