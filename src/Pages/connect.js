import React from "react";
import { Carousel, Button, Form, Container } from "react-bootstrap";
import section1 from "../Images/Section1.jpg";
import section2 from "../Images/Section2.jpg";
import section3 from "../Images/Section3.jpg";

const connect = () => {
  return (
    <Carousel style={{ backgroundColor: "#ccdbfd" }}>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-50"
          src={section1}
          alt="First slide"
          style={{ height: "100vh" }}
        />
        <Carousel.Caption style={{ color: "black" }}>
          <h3>Connect</h3>
          <p>
            Adopt a student allows you to connect and learn from teachers around
            the world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-50" src={section2} alt="Second slide" />
        <Carousel.Caption style={{ color: "black" }}>
          <h3>Learn</h3>
          <p>
            Choose from hundreds of school subjects and we'll find you a teacher
            to learn from.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-50"
          src={section3}
          alt="Second slide"
          style={{ height: "100vh" }}
        />
        <Carousel.Caption style={{ color: "black" }}>
          <h3>Explore</h3>
          <p>
            Learn for free arts,science,maths,computer programming and more from
            teacher created courses.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container style={{ width: "600px", height: "100vh" }}>
          <Form style={{ marginTop: "180px" }}>
            <h2>Sign up to discover more</h2>
            <br />
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
            <Button variant="info" href="signup">
              Continue with Google
            </Button>
          </Form>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default connect;
