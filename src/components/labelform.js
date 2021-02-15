import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { switchlabelformmodal, addLabel } from '../actions/actions'

const LabelForm = () => {

    const [labelname, setLabelName] = useState('');
    const lableFormModalShow = useSelector(state => state.switchLabelFormModal);
    const Dispatch = useDispatch()

    const CreateLabel = (e) => {
        e.preventDefault();
        Dispatch(addLabel(newLabel()))
        Dispatch(switchlabelformmodal());
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
            show={lableFormModalShow}
            onHide={() => Dispatch(switchlabelformmodal())}
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
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                            type="text"
                            maxlength="2"
                            style={{ width: '70px', textTransform: 'uppercase' }}
                            placeholder="Id" />
                        <Form.Text className="text-muted">
                            Id should be two letters long </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onChange={e => setLabelName(e.target.value)}
                            type="text"
                            placeholder="Label Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            type="color"
                            maxlength="2"
                            placeholder="Id" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => Dispatch(switchlabelformmodal())}>Cancel</Button>
                <Button variant="primary" onClick={(e) => CreateLabel(e)} type="submit">Create Label</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LabelForm;