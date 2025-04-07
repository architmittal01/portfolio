import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import book from "../../Assets/Projects/book.jpeg";
import worldcup from "../../Assets/Projects/world cup.jpeg";
import ecommerce from "../../Assets/Projects/ecommerce.jpeg";
import py from "../../Assets/Projects/py.png";
import download from "../../Assets/Projects/download.jpeg";
import download2 from "../../Assets/Projects/download2.jpg";


import { BsDownload } from "react-icons/bs";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download}
              isBlog={false}
              title="Receipe Finder"
              description="The Recipe Finder project is a web application that allows users to search for recipes based on ingredients, dietary preferences, and cuisine types. It provides a user-friendly interface to explore a wide variety of recipes, complete with detailed instructions and nutritional information."
              // description="The World Cup 2023 Data Analysis project leverages statistical and data visualization techniques to uncover insights and trends from the tournament's matches, player performances, and team statistics. It provides actionable insights for teams and fans by analyzing game outcomes, player efficiency, and overall tournament dynamics."
                 ghLink="https://github.com/architmittal01/Receipe-Generator"
              demoLink="https://receipe-generator-peach.vercel.app/"
           

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Shop Management System"
              description=" A Book Shop Management System built using C++ and SQL facilitates efficient handling of inventory, sales, and customer data for bookstores. It allows for seamless tracking of book stock, processing transactions, and generating reports to optimize store operations."
              ghLink="https://github.com/architmittal01/BookShopManagementSystem"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download2}
              isBlog={false}
              title="Store Profit Matrix"
              description="The Store Profit Matrix project is a data visualization tool that analyzes and presents the profitability of various stores or products. It utilizes statistical methods and graphical representations to help businesses identify trends, optimize inventory, and make informed decisions based on profit margins."
              ghLink="https://github.com/architmittal01/Sales-Analysis"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldcup}
              isBlog={false}
              title="Cup Vision-2023"
              description="The World Cup 2023 Data Analysis project leverages statistical and data visualization techniques to uncover insights and trends from the tournament's matches, player performances, and team statistics. It provides actionable insights for teams and fans by analyzing game outcomes, player efficiency, and overall tournament dynamics."
              ghLink="https://github.com/architmittal01/Cup-Vision"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="EazyShop"
              description="An eCommerce website built using React offers a responsive user experience with real-time updates and seamless navigation. It features interactive product displays, streamlined checkout processes, and efficient state management for an enhanced shopping experience."
              ghLink="https://github.com/architmittal01/eazyshop"
              demoLink="https://eazyshop-zeta.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={py}
              isBlog={false}
              title="Screen Recorder"
              description="he Screen Recorder project built using Python captures and records screen activity with high quality, enabling users to create tutorials, presentations, or save live demonstrations. It provides customizable recording options, such as frame rate and resolution, and supports easy playback and export of recorded content. "
              ghLink="https://github.com/architmittal01/Python_ScreenRecorder"
              demoLink=""
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
