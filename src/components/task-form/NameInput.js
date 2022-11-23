import React from "react";
import { Form } from "react-bootstrap";

const NameInput = ({ value, onChange, name }) => {
  return (
    <Form.Group>
      <Form.Label className="form-label">Name</Form.Label>
      <Form.Control
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Task Name"
      />
    </Form.Group>
  );
};

export default NameInput;
