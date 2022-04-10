import React from "react";
import { Form, Button, Container, Figure } from "react-bootstrap";
import adopt from "../Images/adopt.jpg";

function login() {
  return (
    <Container style={{ width: "600px" }}>
      <Figure.Image
        style={{ marginLeft: "120px" }}
        className="login-logo"
        width={300}
        height={300}
        alt="logo"
        src={adopt}
      />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="info" type="submit">
          Sign In
        </Button>{" "}
        <Button variant="info" href="connect">
          Sign Up
        </Button>
      </Form>
      <br />
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" href="Studentprofile">
          Continue Anonymously
        </Button>
        <Button variant="secondary" size="lg">
          Continue with Google
        </Button>
      </div>
    </Container>
  );
}

export default login;
