import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiPandas, SiNumpy, SiPowerbi } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <p>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
        <p>Python</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaJsSquare />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
        <p>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
        <p>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <p>SQL</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <p>ReactJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <p>Numpy</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
