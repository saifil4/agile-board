import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TaskTypeInput = ({ labelId, setLabelId }) => {

    const labelList = useSelector(state => state.labelList);
    return (
        <Form.Group>
            <Form.Label className="form-label">Type</Form.Label>
            <Form.Control value={labelId} as="select" onChange={(e) => setLabelId(parseFloat(e.target.value))}>
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