import { ChangeEvent, ReactNode } from "react";
import { Form } from "react-bootstrap";

interface ISelectProps {
    value: string | number,
    name: string,
    label: string,
    children: ReactNode,
    onChange: (e: ChangeEvent<any>) => void,
}

export const Select = ({ value, name, label, children, onChange }: ISelectProps) => {
    return (
        <select>
            <Form.Label className="form-label">{label}</Form.Label>
            <Form.Control
                name={name}
                as="select"
                value={value}
                onChange={onChange}
            >
                {children}
            </Form.Control>
        </select>
    );
};
