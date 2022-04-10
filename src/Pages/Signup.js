import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Student from "../Images/Student.jpg";
import Teacher from "../Images/Teacher.jpg";

function signup() {
  return (
    <>
      <Row style={{ backgroundColor: "#ccdbfd", height: "100vh" }}>
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
            <Card.Link
              href="#"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "600",
                marginLeft: "100px",
              }}
            >
              Teacher
            </Card.Link>
            <br />
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
              <Card.Link
                href="studentprofile"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "600",
                  marginLeft: "90px",
                }}
              >
                Student
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default signup;
