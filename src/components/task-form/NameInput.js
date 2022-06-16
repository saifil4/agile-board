import React from 'react';
import { Form } from 'react-bootstrap';

const NameInput = ({ value, onChange }) => {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label">Name</Form.Label>
            <Form.Control value={value} onChange={onChange} type="text" placeholder="Task Name" />
        </Form.Group>
    )
}

export default NameInput;