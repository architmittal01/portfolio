import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Archit Mittal </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently a B.Tech student at Indian Institute of Information Technology, Kota.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
         <br/><br/>
          <p style={{ color: "rgb(155 126 172)" }}>
            "मंज़िल उन्हीं को मिलती है जिनके सपनों में जान होती है, पंख से कुछ नहीं होता हौसलों से उड़ान होती है।"{" "}
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
