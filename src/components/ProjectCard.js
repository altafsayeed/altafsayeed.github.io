import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  url,
  github,
  instructions,
  tools,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="proj-img" src={imgUrl} />
        <div className="proj-txtx">
          <h4 className="proj-title">{title}</h4>
          <h6>{description}</h6>
          <h6>Tools used: {tools}</h6>
          <p></p>
          <a className="project-link" href={url} target="_blank">
            {title === "CarBuildz" ? "Video Demo" : "Live App"}
          </a>
          <br />
          <a className="project-link" href={github} target="_blank">
            View code
          </a>
        </div>
      </div>
    </Col>
  );
};
