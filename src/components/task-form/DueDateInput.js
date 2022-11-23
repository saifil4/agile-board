import React from "react";
import { Form } from "react-bootstrap";

const DueDateInput = ({ duedate, onChange, name }) => {
  return (
    <Form.Group>
      <Form.Label className="form-label">Due date</Form.Label>
      <Form.Control
        name={name}
        value={duedate}
        onChange={onChange}
        type="date"
        placeholder="Enter due date"
      />
    </Form.Group>
  );
};

export default DueDateInput;
