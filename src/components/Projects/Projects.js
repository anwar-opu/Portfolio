import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import audioBook from "../../Assets/Projects/smartAudio.png";
import chatify from "../../Assets/Projects/chatify.png";
import amazon_clone_img from "../../Assets/Projects/amazon_clone_img.png";
import princePrediction from "../../Assets/Projects/PricePrediction.png";
import alexaClone from "../../Assets/Projects/alexa_clone.jpg"
import snakeGame from "../../Assets/Projects/snakeGame.png"
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
              title="E-Commerce Website"
              description="This is an e-commerce website built with JavaScript, HTML, CSS, Node.js, Express, and MongoDB. The website allows users to view products, add products to their cart, and manage their accounts."
              ghLink="https://github.com/anwar-opu/online_shop"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alexaClone}
              isBlog={false}
              title="Alexa-like Python Virtual Assistant"
              description="A Python-based virtual assistant that responds to voice commands to tell the time, date, play music, search Wikipedia, tell jokes, and perform web searches. Easily customizable and extendable for your personal needs."
              ghLink="https://github.com/anwar-opu/Virtual-Assistant"
              // demoLink="https://housepricestramlit.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakeGame}
              isBlog={false}
              title="Classic Snake Game"
              description="Snake Game is a classic arcade game built in Python where the player controls a snake to eat food and grow. The goal is to avoid collisions with the walls and the snake’s own body while tracking the score"
              ghLink="https://github.com/anwar-opu/Snake_Game"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audioBook}
              isBlog={false}
              title="Smart Audio Book"
              description="Smart Audio Book is a Python script that converts text from a PDF document into spoken words using text-to-speech (TTS) technology. Users can specify a range of pages to read aloud, making it easier to consume PDF content audibly. The script utilizes pyttsx3 for speech synthesis and PyPDF2 for extracting text from PDF files."
              ghLink="https://github.com/anwar-opu/Smart-Audio-Book"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={princePrediction}
              isBlog={false}
              title="iPhone Price Prediction"
              description="This project uses linear regression to predict iPhone prices based on their version. It reads historical data from a CSV file, trains a model, and predicts the price for a user-specified iPhone version."
              ghLink="https://github.com/anwar-opu/predict-iphone-price"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon_clone_img}
              isBlog={false}
              title="Amazon clone"
              description="This project is a static clone of the Amazon website, built entirely using HTML and CSS. It replicates key visual elements, including the layout, header, product listings, and footer, providing a close representation of the original site without any backend functionality or interactivity. The focus is on achieving a clean, responsive design that mimics the real Amazon interface."
              ghLink="https://github.com/anwar-opu/amazon_clone"
              demoLink="https://anwar-opu.github.io/amazon_clone/"     // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
