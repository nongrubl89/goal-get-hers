import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Mailchimp from "react-mailchimp-form";

export default function EmailModal(props) {
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Join the Goal GetHERS mailing list</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form>
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
          </Form> */}
        <Mailchimp
          action="https://Goalgethers.us1.list-manage.com/subscribe/post?u=ea5e4f94b3a03cfd8d537f2ed&amp;id=fec0f2f1e0"
          fields={[
            {
              name: "FNAME",
              placeholder: "First Name",
              type: "text",
              required: true,
              className: "form-mail",
            },
            {
              name: "LNAME",
              placeholder: "Last Name",
              type: "text",
              required: true,
            },
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
          ]}
          messages={{
            sending: "Sending...",
            success: "Thank you for your interest in Goal GetHERS!",
            error: "An unexpected internal error has occurred.",
            empty: "Please fill in your email",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!",
          }}
        />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Subscribe
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}
