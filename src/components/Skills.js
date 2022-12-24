import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from "../assets/img/js.svg";
import react from "../assets/img/react.svg";
import node from "../assets/img/node.svg";
import python from "../assets/img/python.svg";
import java from "../assets/img/java.svg";
import cpp from "../assets/img/c++.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I can work with the following languages and frameworks. <br />
                I'm always open to learn new ones as well.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {/*SKILLS TO ADD: MONGODB, EXPRESS, GIT */}
                <div className="item">
                  <img src={js} alt="javascript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={node} alt="node" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={python} alt="python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={java} alt="java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={cpp} alt="c++" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css" />
                  <h5>CSS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
