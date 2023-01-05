import { Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/jobtrak.png";
import projImg2 from "../assets/img/ubus.png";
import projImg3 from "../assets/img/carbuildz.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "JobTrak",
      description: "Full-stack job application manager app",
      tools: "MongoDB, Express, React, Node.js",
      imgUrl: projImg1,
      url: "https://jobtrak.onrender.com",
      youtube: "https://youtu.be/Ktpa3NqP7uM",
      github: "https://github.com/altafsayeed/job-tracker-app",
    },
    {
      title: "UBus",
      description: "Full-stack bus ticketing app with payment integration",
      tools: "MongoDB, Express, React, Redux, Node.js, Stripe",
      imgUrl: projImg2,
      url: "https://ubus-app.herokuapp.com/",
      youtube: "https://youtu.be/PbpLTFn3xqQ",
      github: "https://github.com/altafsayeed/bus-ticketing-app",
    },
    {
      title: "CarBuildz",
      description: "Full-stack social media app for car enthusiasts",
      tools: "MongoDB, Express, React, Redux, Node.js",
      imgUrl: projImg3,
      url: "https://youtu.be/Joo37zl0Mmk",
      github: "https://github.com/altafsayeed/CarBuildz",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>
                    Have a look at some of my projects.{" "}
                    <b className="please-note">
                      Please note that it may take up to 30 seconds for the
                      website to load since I am using Render's free tier.
                    </b>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
