import React from 'react';
import { Form } from 'react-bootstrap';

const PriorityInput = ({ priority, setPriority }) => {
    const priorityList = [
        {
            name: 'High',
            value: '3',
            color: '#e01c13'
        },
        {
            name: 'Medium',
            value: '2',
            color: '#f6b32d'
        },
        {
            name: 'Low',
            value: '1',
            color: '#abcd38'
        }
    ]

    return (
        <Form.Group>
            <Form.Label className="form-label">Priority</Form.Label>
            <Form.Control value={priority} onChange={e => setPriority(e.target.value)} as="select">
                {priorityList.map((pl) => (
                    <option value={JSON.stringify(pl)}>{pl.name}</option>
                ))}
            </Form.Control>
        </Form.Group>
    )
}

export default PriorityInput;