import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chessmate from "../../Assets/Projects/chessmate.png";
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
              imgPath={chatify}
              isBlog={false}
              title="WorldAtlas"
              description="The World Tour application is a React-based project that allows users to explore various destinations around the globe. This application provides an interactive interface for users to search and filter locations, making it easy to find information about different places."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://worldatlasweb.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chessmate}
              isBlog={false}
              title="ChessMate"
              description=" real-time chess application that allows two players to compete online. The platform was built using Node.js and WebSockets to handle live game states and seamless communication, Implemented core game logic, including complex move validation and check/checkmate detection, to ensure accurate and seamless gameplay."
              ghLink="https://github.com/raviraj34/Chess-frontend"
              demoLink="https://chessmateplay.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Email-Checker"
              description="Engineered a full-stack email processing platform that uses the Gemini API for advanced email categorization and content analysis. The application provides key insights into email content, such as identifying spam, classifying emails by topic (e.g., promotional, personal, urgent), and extracting key information. The solution was built with a custom backend to communicate with the AI model and a user-friendly front end for displaying results."
              ghLink="https://github.com/raviraj34/email-checker-ai"
              demoLink="https://email-checker-ai.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
