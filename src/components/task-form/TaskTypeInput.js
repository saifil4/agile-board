import React from 'react';
import { Form } from 'react-bootstrap';

const taskTypes = [
    {
        'id': 1,
        'key': "B",
        'name': 'Bug',
        'bgcolor': '#E53935',
        'color': '#ffffff'
    },
    {
        'id': 2,
        'key': "S",
        'name': 'Story',
        'bgcolor': '#7CB342',
        'color': '#ffffff'
    },
    {
        'id': 3,
        'key': "T",
        'name': 'Task',
        'bgcolor': '#1E88E5',
        'color': '#ffffff'
    }
];

const TaskTypeInput = ({ labelId, onChange }) => {

    return (
        <Form.Group>
            <Form.Label className="form-label">Type</Form.Label>
            <Form.Control value={labelId} as="select" onChange={onChange}>
                <option value=''> Select </option>
                {
                    taskTypes.map(label => (
                        <option value={label.id} key={label.id}>
                            {label.name}
                        </option>
                    ))
                }
            </Form.Control>
        </Form.Group>
    )
}

export default TaskTypeInput;