import React, { useState } from "react";
import AlertComponent from "./AlertComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const InfoForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [alert, setAlert] = useState();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setAlert({
        title: "Invalid input",
        message: "Please enter a valid username and age.",
      });
      return;
    }

    // + to make string into a number
    if (+age < 1) {
      setAlert({
        title: "Invalid input",
        message: "Please enter a valid age.",
      });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };
    props.onAddUser(userData);

    setUsername("");
    setAge("");
  };

  const alertHandler = () => {
    setAlert(null);
  };

  return (
    <div>
      {alert && (
        <AlertComponent
          title={alert.title}
          message={alert.message}
          onConfirm={alertHandler}
        />
      )}
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Form onSubmit={addUserHandler}>
              <Form.Group className="mb-3" controlId="fromBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={usernameHandler}
                  value={username}
                  type="text"
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="fromBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  onChange={ageHandler}
                  value={age}
                  type="number"
                  placeholder="Age"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add User
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoForm;
