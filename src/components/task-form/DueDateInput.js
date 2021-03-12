import React from 'react';
import { Form } from 'react-bootstrap';

const DueDateInput = ({ duedate, setDuedate }) => {
    return (
        <Form.Group>
            <Form.Label className="form-label">Due date</Form.Label>
            <Form.Control value={duedate} onChange={e => setDuedate(e.target.value)} type="date" placeholder="Enter due date" />
        </Form.Group>
    )
}

export default DueDateInput;