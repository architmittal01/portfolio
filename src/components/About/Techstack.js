import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiPandas, SiNumpy, SiC } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <p>C</p>
      </Col>
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
        <FaReact />
        <p>ReactJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <p>MySQL</p>
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
