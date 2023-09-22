import { ChangeEvent, ReactNode } from "react";
import { Form } from "react-bootstrap";

interface IInputProps {
    value: string | number,
    type?: "textarea" | "text" | "date" | "select",
    name: string,
    onChange: (e: ChangeEvent<any>) => void,
    children?: ReactNode | null
}

const Input = ({ value, onChange, name, type = "text" }: IInputProps) => {
    return (
        <Form.Group>
            <Form.Label className="form-label">Description</Form.Label>
            <Form.Control
                name={name}
                value={value}
                onChange={onChange}
                as="textarea"
                rows={2}
            />
        </Form.Group>
    );
};

export default Input;
