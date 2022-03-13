import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {ListGroup, } from "react-bootstrap";

const UserItem = (props) => {
  return (
    <ListGroup.Item >{props.username} ({props.age} years old)</ListGroup.Item>
  );
};

export default UserItem;
