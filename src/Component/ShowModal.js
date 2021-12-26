import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import NewLeadInput from "./NewLeadInput";
import Form from "./NewLeadInput";

function ShowModal({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Add Lead <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Modal</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(values) => alert(JSON.stringify(values))} />;
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowModal;
