import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a strong passion for programming and backend development,
              and I'm continuously learning and improving my skills.
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple"> C++, Python, JavaScript, and Java. </b>
              </i>
              <br />
              <br />
              My areas of interest include building innovative{" "}
              <i>
                <b className="purple">Web Technologies and Products </b> and
                working on projects related to{" "}
                <b className="purple">Machine Learning, Data Integration, and REST APIs.</b>
              </i>
              <br />
              <br />
              Currently, I am working as a Backend Developer at{" "}
              <b className="purple">Kumori Technologies,</b> where I apply my
              skills in <b className="purple">Node.js</b> and{" "}
              <i>
                <b className="purple">
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>{" "}
              to develop efficient and scalable applications.
              <br />
              <br />
              Additionally, I am a{" "}
              <b className="purple">ServiceNow Certified Application Developer (CAD)</b> 
              and <b className="purple">Certified System Administrator (CSA),</b> 
              which further enhances my ability to integrate and optimize enterprise-level solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tushar92644"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/home"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tushar-agarwal-a18b841b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/invites/contact/?i=13cqnb24tsjmo&utm_content=1xoe5fv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
