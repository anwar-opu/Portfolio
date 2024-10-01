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
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, C++ and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> EDUCATION 🎓</span>
            </h1>
            <p className="home-about-body">
              <h3>
                <b>
                  <ul>
                    <li>
                      <span >Daffodil Institute of IT</span>
                    </li>
                  </ul>
                </b>
              </h3>
              <h4>B.sc in<span className="purple"> computer science</span></h4>
              <p>2020-Present 
              Expected graduation: May 2025</p>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> LEADERSHIP </span> EXPERIENCE
            </h1>
            <p className="home-about-body">
              <h3>
                <b>
                  <ul>
                    <li>
                      <span className="purple">Vice President</span>
                    </li>
                  </ul>
                </b>
              </h3>
              <h4 > Daffodil Institute of IT Programming Club - DPC</h4>
              <p>August 2023 - June 2024 Kalabagan, Dhaka-1205</p>
            </p>
            <p className="home-about-body">
              <h3>
                <b>
                  <ul>
                    <li>
                      <span className="purple">Cadet Corporal</span>
                    </li>
                  </ul>
                </b>
              </h3>
              <h4>Bangladesh Nation Cadet Corps (BNCC)</h4>
              <p>January 2012 - December 2015</p>
            </p>
          </Col>
        </Row>

        {/* Add the Projects component here */}

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anwar-opu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/anwar9437"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mdanwarhossainopu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
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
