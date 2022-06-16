import React from 'react';
import { Form } from 'react-bootstrap';

const DescriptionInput = ({ description, onChange }) => {
    return (
        <Form.Group>
            <Form.Label className="form-label">Description</Form.Label>
            <Form.Control value={description} onChange={onChange} as="textarea" rows={2} />
        </Form.Group>
    )
}

export default DescriptionInput;