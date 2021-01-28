import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LabelForm = ({ labelFormShow, setLabelFormShowToClose, labelList, setLabelList }) => {

    const [labelname, setLabelName] = useState('');

    const CreateLabel = (e) => {
        e.preventDefault();
        setLabelList([...labelList, newLabel()]);
        setLabelFormShowToClose();
    }

    function newLabel() {
        return {
            'id': Math.random() * 1000,
            'name': labelname,
            'iconclass': 'fas fa-tag'
        }
    }

    return (
        <Modal
            show={labelFormShow}
            onHide={setLabelFormShowToClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Label
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onChange={e => setLabelName(e.target.value)}
                            type="text"
                            placeholder="Label Name" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={setLabelFormShowToClose}>Cancel</Button>
                <Button variant="primary" onClick={(e) => CreateLabel(e)} type="submit">Create Label</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LabelForm;