import React, { useState } from "react";
import { Modal,Button } from "react-bootstrap";

const Mymodal:React.FC=()=>{
    const [show,setShow]=useState<boolean>(false)
    const openShow=()=>{
        setShow(true);
    }
    const offShow=()=>{
        setShow(false);
    }
    return(
        <div>
            <Button variant="success" onClick={openShow}>Confirmacion</Button>
       <Modal show={show} onHide={offShow}>
        <Modal.Header closeButton>
            <Modal.Title>Mensaje enviado</Modal.Title>
    
        </Modal.Header>
        <Modal.Body>gracias por confirmar</Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={offShow}>Aceptar</Button>
        </Modal.Footer>
       </Modal>
        </div>
    )
}
export default Mymodal;
