import React from 'react';
import { Form } from 'react-bootstrap';

const PriorityInput = ({ priority, onChange }) => {
    const priorityList = [
        {
            name: 'High',
            value: 3,
            color: '#e01c13'
        },
        {
            name: 'Medium',
            value: 2,
            color: '#f6b32d'
        },
        {
            name: 'Low',
            value: 1,
            color: '#abcd38'
        }
    ]

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