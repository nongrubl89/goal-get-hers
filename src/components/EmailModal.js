import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function EmailModal(props) {
  return (
    <>
      <Modal centered show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join the Goal GetHERS mailing list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="First Name" />
            </Form.Group>
            <Form.Group controlId="formGroupLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Last Name" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="password" placeholder="Email" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Subscribe
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
