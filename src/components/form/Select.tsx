import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

interface ISelectProps {
    value: string | number,
    name: string,
    label: string,
    list: { name: string, value: string | number }[],
    onChange: (e: ChangeEvent<any>) => void,
}

export const Select: React.FC<ISelectProps> = ({ value, name, label, list, onChange }) => {

    return (
        <>
            <Form.Label className="form-label">{label}</Form.Label>
            <Form.Control
                name={name}
                as="select"
                value={value}
                onChange={onChange}
            >
                {
                    list.map((pl) => (
                        <option value={pl.value}>
                            {pl.name}
                        </option>
                    ))
                }
            </Form.Control>
        </>
    );
};
