import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedInLogo from "../assets/img/linkedin.png";
import githubLogo from "../assets/img/github2.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={linkedInLogo} />
              </a>
              <a href="">
                <img src={githubLogo} />
              </a>
            </div>
            <p>© Copyright 2023 Altaf Sayeed</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
