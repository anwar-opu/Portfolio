import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillAwardFill } from "react-icons/bs"; // Certificate Icon
import { FaExternalLinkAlt } from "react-icons/fa"; // External link icon

function CertificationCard(props) {
  return (
    <Card className="certification-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="certification-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.certLink} target="_blank">
          <BsFillAwardFill /> &nbsp;
          {"Certificate"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains any related link */}
        {props.moreInfo && (
          <Button
            variant="primary"
            href={props.moreInfo}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaExternalLinkAlt /> &nbsp;
            {"More Info"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
