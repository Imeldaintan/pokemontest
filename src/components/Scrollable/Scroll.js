import React, { useState } from 'react';
import typeColors from '../../helpers/typeColors';
import { Form, Modal, Button } from 'react-bootstrap';
import './style.css';

function Scroll({ pokemon }) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log("name = " + pokemon.name, "height = " + pokemon.height)

    return (
        <>
        <div className="hatsi">
            <button className="hatsi_button" onClick={handleShow}>
                {pokemon.name}
            </button>   
            
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </div>
</>
    );
}

export default Scroll;
