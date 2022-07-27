import React from 'react';
import { Form } from 'react-bootstrap';
import { priorityList } from '../../data';

const PriorityInput = ({ priority, onChange }) => {
    return (
        <Form.Group>
            <Form.Label className="form-label">Priority</Form.Label>
            <Form.Control value={priority} onChange={onChange} as="select">
                {priorityList.map((pl) => (
                    <option value={pl.value}>{pl.name}</option>
                ))}
            </Form.Control>
        </Form.Group>
    )
}

export default PriorityInput;