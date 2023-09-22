import React from 'react';
import { Form } from 'react-bootstrap';
import { useData } from 'hooks/useData';

const TaskTypeInput = ({ value, onChange, name }) => {

    const { labelList} = useData();

    return (
        <Form.Group>
            <Form.Label className="form-label">Type</Form.Label>
            <Form.Control name={name} value={value} as="select" onChange={onChange}>
                <option value=''> Select </option>
                {
                    labelList.map(label => (
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