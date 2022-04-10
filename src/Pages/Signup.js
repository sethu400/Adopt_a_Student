import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Student from "../Images/Student.jpg";
import Teacher from "../Images/Teacher.jpg";
import Studentprofile from "../Pages/Studentprofile";

function signup() {
  return (
    <>
      <Row>
        <Col>
          <Card
            border="primary"
            style={{ width: "18rem", marginLeft: "150px", marginTop: "100px" }}
          >
            <Card.Img
              variant="top"
              className="login-logo"
              width={400}
              height={300}
              alt="logo"
              src={Teacher}
            />
            <Card.Body>
              <Card.Title>Teacher</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            border="primary"
            style={{ width: "18rem", marginLeft: "180px", marginTop: "100px" }}
            href="studentprofile"
          >
            <Card.Img
              variant="top"
              className="login-logo"
              width={300}
              height={300}
              alt="logo"
              src={Student}
              href="studentprofile"
            />
            <Card.Body>
              <Card.Title href="studentprofile" style={{ cursor: "pointer" }}>
                Student
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default signup;
