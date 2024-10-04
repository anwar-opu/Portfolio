import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Certifications() {
  return (
    <Container fluid className="certification-section py-5">
      <Container>
        {/* Added inline style for extra top margin */}
        <h1
          className="certification-heading text-center text-white mb-4"
          style={{ marginTop: "100px" }} // Custom top margin
        >
          My <strong className="purple">Certifications</strong>
        </h1>
        <p className="text-center text-light mb-5">
          Below are some of the certifications I have earned recently.
        </p>

        <Row className="justify-content-center">
          {/* First Certification Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="purple">ICPC 2021 Participation</Card.Title>
                <Card.Text>
                Participated in The 2021 ICPC Asia Dhaka Regional Site Online Preliminary Contest

                03 - 03 September 2022
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://drive.google.com/file/d/11h1ApveldzzXvc2iffN-UBYJ0n0OS1T8/view?usp=drive_link"
                  className="mb-2"
                >
                  View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Certification Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="purple">ICPC 2023 Participation</Card.Title>
                <Card.Text>
                Participated in The 2021 ICPC Asia Dhaka Regional Site Online Preliminary Contest

                13 October 2023
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://drive.google.com/file/d/1EULKpyGYw4QNwKGSH9cQYzVV86gxtNxw/view?usp=drive_link"
                  className="mb-2"
                >
                  View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* 3rd Certification Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="purple">Meta Hacker Cup 2023</Card.Title>
                <Card.Text>
                The 2023 Meta Hacker Cup  Site Online Preliminary Contest
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://drive.google.com/file/d/1wG79Loe9C5qTqtiaBG_XzzNoBqZwY1In/view?usp=drive_link"
                  className="mb-2"
                >
                  View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* 4th Certification Card */}
          <Col md={6} lg={4} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="purple">Phitron 2022</Card.Title>
                <Card.Text>
                For Programming Contest 2022 organized by Phitron,an online programming competition held on August 12, 2022.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://drive.google.com/file/d/10rZ5jd1k-C5pT1-BoiBfu4C45NqPBV1G/view?usp=drive_link"
                  className="mb-2"
                >
                  View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
