import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

const UserItem = (props) => {

  const deleteHandler = () => {
    props.onDeleteUser(props.id);
  };

  return (
    <ListGroup.Item onClick={deleteHandler}>
      {props.username} ({props.age} years old)
    </ListGroup.Item>
  );
};

export default UserItem;
