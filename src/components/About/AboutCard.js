import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tushar Agarwal </span>
            from <span className="purple">Jaipur, Rajasthan, India.</span>
            <br /> I have completed my degree in Computer Science with a specialization in Data Science and Data Analytics from <span className="purple">JECRC University.</span>
            <br /> Currently, I am working as a Backend Developer at <span className="purple">Kumori Technologies.</span> 
            <br />
            I am passionate about leveraging my technical skills to solve complex problems in a dynamic environment, with a focus on backend development, data analytics, and open-source contributions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace challenges, unleash your potential, and conquer the world."
          </p>
          <footer className="blockquote-footer">Tushar Agarwal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
