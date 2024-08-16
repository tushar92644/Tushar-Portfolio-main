import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";
import emotion from "../../Assets/Projects/emotion.png";

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
        <Row style={{ paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="College Website"
              description="I am leading the development of a modern website for our college using HTML, CSS, and JavaScript. The site aims to provide an exceptional online experience with a user-friendly interface, seamless navigation, and enhanced accessibility. Our goal is to reflect the college's values and meet the diverse needs of students, faculty, and visitors through a visually appealing and responsive design."
              ghLink="https://github.com/tushar92644/college_website"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Car-Price-Pridiction"
              description="I played a key role in a project predicting used car prices using diverse machine learning algorithms. Our goal is to provide accurate and reliable price estimates, empowering buyers and sellers to make informed decisions. By leveraging data-driven insights and advanced modeling techniques, we aim to enhance prediction accuracy and create a valuable tool for the automotive market."
              ghLink="https://github.com/tushar92644/price-predictor-of-cars-"
              demoLink="https://share.streamlit.io/"
            />v
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="COURECO"
              description="In our project, we utilized machine learning algorithms to personalize job and study recommendations, significantly boosting student success. By implementing a robust recommendation system, we matched students with relevant opportunities and courses, resulting in increased engagement and satisfaction. Our data-driven approach aimed to empower students to make informed choices and enhance their educational and career outcomes."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Minecraft"
              description="MinedCraft is a versatile full-stack web application built with Next.js, TypeScript, and OpenAI, offering features like AI chat, blog generation, email crafting, podcast creation, and code generation. It provides a seamless user experience with secure authentication and responsive design, optimized for various devices. This project streamlines content creation and enhances productivity by leveraging advanced AI functionalities."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chat With Multi PDF"
              description="Chat with Multi PDF is a Python application that allows users to interact with multiple PDFs via an AI-powered chat interface. By integrating a vector database and the OpenAI API, users can upload PDFs and receive responses based on the document content. This tool enhances accessibility and data retrieval, making it easier to extract information from complex documents."
              ghLink="https://github.com/tushar92644/Caladin-AI"
              demoLink="https://caladinai.streamlit.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
