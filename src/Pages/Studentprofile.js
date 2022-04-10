import React, { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";

function Studentprofile() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getcountry = async () => {
      const req = await fetch("https://restcountries.com/v3.1/all");
      const getres = await req.json();
      console.log(getres);
      setCountry(await getres);
    };
    getcountry();
  }, []);
  return (
    <Container style={{ width: "600px" }}>
      <h2 style={{ marginLeft: "50px" }}>Setup your profile to get started</h2>
      <Form style={{ marginTop: "69px" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Display Name</Form.Label>
          <Form.Control placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Summary Statement</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Form.Text className="text-muted">
            Other users will see this on your profile.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Preferred Language</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select</option>
            <option value="1">English</option>
            <option value="2">French</option>
            <option value="3">Malay</option>
            <option value="4">Portuguese</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Preferred Location</Form.Label>
          <Form.Select name="country" className="form-control">
            <option>Select Country</option>
            {country.map((getcon) => (
              <option key={getcon.id} value={getcon.id}>
                {getcon.name.common}
              </option>
            ))}
          </Form.Select>
          <Form.Text className="text-muted">
            This is for specifying if you want teachers from a specific
            location.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Button variant="primary" size="lg">
            Save
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Studentprofile;
