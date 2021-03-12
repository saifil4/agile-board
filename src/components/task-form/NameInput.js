import React from 'react';
import { Form } from 'react-bootstrap';

const NameInput = ({ taskname, setTaskName }) => {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label">Name</Form.Label>
            <Form.Control value={taskname} onChange={e => setTaskName(e.target.value)} type="text" placeholder="Task Name" />
        </Form.Group>
    )
}

export default NameInput;