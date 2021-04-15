import React from "react";
import { Modal } from "react-bootstrap";
import Mailchimp from "react-mailchimp-form";

export default function EmailModal(props) {
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Join the Goal GetHERS mailing list</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Mailchimp
          action={process.env.REACT_APP_MAILCHIMP_URL}
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
