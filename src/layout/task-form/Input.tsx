import { ChangeEvent, ReactNode } from "react";
import { Form } from "react-bootstrap";

interface IInputProps {
    value: string | number,
    name: string,
    type: "text" | "textarea" | "date" | "select",
    onChange: (e: ChangeEvent<any>) => void,
    children?: ReactNode | null,
    label: string
}

const Input = ({ value, onChange, name, type, label, children }: IInputProps) => {
    return (
        <Form.Group>
            <Form.Label className="form-label">{label}</Form.Label>
            {
                type === "select" ?
                    <Form.Control
                        name={name}
                        type="select"
                        value={value}
                        onChange={onChange}
                    >
                        {children}
                    </Form.Control>
                    :
                    <Form.Control
                        name={name}
                        type={type}
                        value={value}
                        onChange={onChange}
                    />
            }
        </Form.Group>
    );
};

export default Input;
