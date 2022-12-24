import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url, github }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="proj-img" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <p></p>
          <a class="project-link" href={url} target="_blank">
            {title === "CarBuildz" ? "Video Demo" : "Live App"}
          </a>
          <br />
          <a class="project-link" href={github} target="_blank">
            View code
          </a>
        </div>
      </div>
    </Col>
  );
};
