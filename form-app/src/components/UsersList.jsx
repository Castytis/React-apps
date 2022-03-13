import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import UserListItem from "./UserListItem";

const UsersList = (props) => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <ListGroup>
            {props.users.map((user) => {
              return <UserListItem key={user.id} username={user.username} age={user.age} />;
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UsersList;
