import { ChangeEvent, ElementType, ReactNode } from "react";
import { Form } from "react-bootstrap";

interface IInputProps {
    value: string | number,
    type?: ElementType<any>,
    name: string,
    onChange: (e: ChangeEvent<any>) => void,
    children?: ReactNode | null,
    label: string
}

const Input = ({ value, onChange, name, type = "text", label }: IInputProps) => {
    return (
        <Form.Group>
            <Form.Label className="form-label">{label}</Form.Label>
            <Form.Control
                name={name}
                value={value}
                onChange={onChange}
                as={type}
                rows={2}
            />
        </Form.Group>
    );
};

export default Input;
