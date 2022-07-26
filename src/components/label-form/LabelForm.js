import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LabelForm = ({ closeForm }) => {

    const [labelname, setLabelName] = useState('');
    const [key, setKey] = useState('');
    const [background, setBackground] = useState('#000000');
    const [color, setColor] = useState('#ffffff');

    const CreateLabel = (e) => {
        e.preventDefault();
        // Dispatch(addLabel(newLabel()))
        closeForm();
    }

    function newLabel() {
        return {
            'id': Math.random() * 1000,
            'key': key,
            'name': labelname,
            'bgcolor': background,
            'color': color,
        }
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title as="h6" id="contained-modal-title-vcenter">
                    New Label
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={e => setKey(e.target.value)}
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
                    <div>
                        <Form.Group style={{ width: '50%', display: 'inline-block' }}>
                            <Form.Label>Font Color</Form.Label>
                            <Form.Control
                                style={{ width: 'calc(100% - 5px)' }}
                                type="color"
                                onChange={e => setColor(e.target.value)}
                                value={color}
                                maxlength="2"
                                placeholder="Id" />
                        </Form.Group>
                        <Form.Group style={{ width: '50%', display: 'inline-block' }}>
                            <Form.Label>Background</Form.Label>
                            <Form.Control
                                style={{ width: 'calc(100% - 5px)' }}
                                type="color"
                                onChange={e => setBackground(e.target.value)}
                                value={background}
                                maxlength="2"
                                placeholder="Id" />
                        </Form.Group>
                    </div>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => closeForm()}>Cancel</Button>
                <Button variant="primary" onClick={(e) => CreateLabel(e)} type="submit">Create Label</Button>
            </Modal.Footer>
        </>
    );
}

export default LabelForm;