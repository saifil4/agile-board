import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

interface IDateInputProps {
    value: string,
    name: string,
    onChange: (e: ChangeEvent<any>) => void,
    label: string,
}

export const DateInput = ({ value, onChange, name, label }: IDateInputProps) => {
    return (
        <Form.Group>
            <Form.Label className="form-label">{label}</Form.Label>
            <Form.Control
                name={name}
                type="date"
                value={value}
                onChange={onChange}
            />
        </Form.Group>
    );
};
