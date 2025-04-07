import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificationCards";
import Particle from "../Particle";


import { BsDownload } from "react-icons/bs";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications & Publication </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={download}
              // isBlog={false}
              title="British Airways Data Science Job Simulation"
            
                 ghLink="https://drive.google.com/file/d/1p8M5GyHWuAOIXmUnSH6WKgKCiE3W4B0k/view"
              // demoLink="https://receipe-generator-peach.vercel.app/"
           

            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={download}
              // isBlog={false}
              title="Walmart Software Engineering Virtual Experience Program"
            
                 ghLink="https://drive.google.com/file/d/1dhG1hz22gb-GeEztsSTP7OG_PuFvPijw/view"
              // demoLink="https://receipe-generator-peach.vercel.app/"
           

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={download}
              // isBlog={false}
              title="BCG Data Science Job Simulation"
            
                 ghLink="https://drive.google.com/file/d/1lV6PShXStO8t5ywMTEiSU-M5J0xI6uwL/view"
              // demoLink="https://receipe-generator-peach.vercel.app/"
           

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={download}
              // isBlog={false}
              title="Citi ICG Technology Software Development Job Simulation"
            
                 ghLink="https://drive.google.com/file/d/1X3GvaiIa8FKdNRlOy-5Vh60zp4de5b5L/view"
              // demoLink="https://receipe-generator-peach.vercel.app/"
           

            />
          </Col>
         

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={download}
              // isBlog={false}
              title="Analysis of Forward Error Correction Codes in Optic Communication for Improved Coding Gain"
            
                 ghLink="https://drive.google.com/file/d/1B-s9mTE__XMFqNL5-IDpLiWDt5IN5Wcy/view?usp=drive_link"
              // demoLink="https://receipe-generator-peach.vercel.app/"
           

            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
