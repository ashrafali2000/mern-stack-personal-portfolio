import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import pp from "../../images/portfolio.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row className="g-5">
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3} className="col-sm-12 col-md-6 col-lg-4">
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(52, 153, 111)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                      FGRF (Faizan Global Relief Foundation)
                    </h5>
                    <img src="./project_images/fgrf.png" alt="./project_images/fgrf.png" />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://www.fgrf.uk/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#000",
                        color: "#bbb",
                        fontWeight: 600,
                      }}
                    >
                      The New Year Countdown Project is more than just a
                      celebration; it's a testament to the human spirit and our
                      shared aspirations for a brighter future. So, mark your
                      calendars and get ready to be part of this global
                      extravaganza as we count down to a new year filled with
                      endless possibilities.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#000",
                      color: "#bbb",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3} className="col-sm-12 col-md-6 col-lg-4">
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(52, 153, 111)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                      Sigmantarian
                    </h5>
                    <img src="./project_images/sigmantarian.png" alt="./project_images/sigmantarian.png" />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://sigmantarian.com/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#000",
                        color: "#bbb",
                        fontWeight: 600,
                      }}
                    >
                      Use of AI and Machine Learning: Artificial intelligence
                      and machine learning are already being used in healthcare
                      to help predict heart disease. In the future, these
                      technologies could become more advanced, enabling more
                      accurate predictions of heart disease risk.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#000",
                      color: "#bbb",
                      fontWeight: 600,
                    }}
                  >
                    Pandas, Matplotlib, Scikit-Learn
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3} className="col-sm-12 col-md-6 col-lg-4">
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    // backgroundColor: "rgb(142 70 186 / 31%)",
                    backgroundColor: "rgb(52, 153, 111)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                      BawdicSoft
                    </h5>
                    <img src="./project_images/bawdicsoft.png" alt="./project_images/bawdicsoft.png" />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://www.bawdicsoft.com/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#000",
                        color: "#bbb",
                        fontWeight: 600,
                      }}
                    >
                      A Payroll management System with feature like generate
                      payslip & reports. It manages salaries, leaves, branches,
                      employees, designations, shifts, holidays and employee
                      attendance. It has chat application so internal employees
                      can use that feature.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#000",
                      color: "#bbb",
                      fontWeight: 600,
                    }}
                  >
                    CSS, JavaScript, PHP, SCSS
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3} className="col-sm-12 col-md-6 col-lg-4">
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(52, 153, 111)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                      Al-Madina School System
                    </h5>
                    <img src="./project_images/almadinaschoolsystem.png" alt="./project_images/almadinaschoolsystem.png" />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://al-madina-school-system.vercel.app/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#000",
                        color: "#bbb",
                        fontWeight: 600,
                      }}
                    >
                      Welcome to my personal portfolio. Explore my work, skills,
                      and achievements in a concise and visually appealing
                      format. Get a glimpse of my expertise and creativity.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#000",
                      color: "#bbb",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, SCSS, React, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3} className="col-sm-12 col-md-6 col-lg-4">
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(52, 153, 111)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                      Mern BLog Website
                    </h5>
                    <img src="./project_images/mern_blog.png" alt="./project_images/mern_blog.png" />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://mern-blog-app-py3d.vercel.app/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#000",
                        color: "#bbb",
                        fontWeight: 600,
                      }}
                    >
                      Welcome to my personal portfolio. Explore my work, skills,
                      and achievements in a concise and visually appealing
                      format. Get a glimpse of my expertise and creativity.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#000",
                      color: "#bbb",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, SCSS, React, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3} className="col-sm-12 col-md-6 col-lg-4">
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(52, 153, 111)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fff" }}>
                    Image Generater
                    </h5>
                    <img src="./project_images/promt_to_image.png" alt="./project_images/promt_to_image.png" />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://prompt-to-image.vercel.app/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#000",
                        color: "#bbb",
                        fontWeight: 600,
                      }}
                    >
                      Welcome to my personal portfolio. Explore my work, skills,
                      and achievements in a concise and visually appealing
                      format. Get a glimpse of my expertise and creativity.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#000",
                      color: "#bbb",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, SCSS, React, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
