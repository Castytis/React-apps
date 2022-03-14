import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

function AlertModal(props) {
    
  return (
    <Alert variant="danger" onClose={props.onConfirm} dismissible>
      <Alert.Heading>{props.title}</Alert.Heading>
      <p>{props.message}</p>
    </Alert>
  );
}

export default AlertModal;
