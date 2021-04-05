import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function EmailModal(props) {
  return (
    <>
      <Modal centered show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>Form goes here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
