//Cited: a few gitrepos

// Use useState to maintain state in functional component
import React, { useState } from "react";
// used for saving book modal
import { Modal, Button } from "react-bootstrap";
import "./style.css";

// Use React Hooks here to handle state
function SaveBtn({ type = "btn btn-m", className, children, onClick }) {
  const [show, setShow] = useState(false);

  // handles closing of modal
  const handleClose = () => setShow(false);
  // handles showing of modal
  const handleShow = () => setShow(true);

  // saves book to the db and shows modal
  const click = () => {
    handleShow();
    onClick();
  };

  return (
    <>
      <button
        onClick={click}
        className={["btn btn-m btn-primary", `btn-${type}`, className].join(
          " "
        )}
      >
        {children}
      </button>

      {/* Make a notifications pop up to tell the book has beed saved */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your book has been saved!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="btn" onClick={handleClose}>
            CLOSE
          </Button>
          <Button variant="btn" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SaveBtn;
