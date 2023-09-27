import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

interface ITextInputProps {
    value: string,
    name: string,
    label: string,
    type: "text" | "textarea",
    onChange: (e: ChangeEvent<any>) => void,
}

export const TextInput = ({ value, name, label, type, onChange }: ITextInputProps) => {
    return (
        <Form.Group>
            <Form.Label className="form-label">{label}</Form.Label>
            <Form.Control
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </Form.Group>
    );
};
