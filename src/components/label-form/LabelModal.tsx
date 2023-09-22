import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import { useData } from "hooks/useData";
import { ILabel } from "data";

interface ILabelModalProps {
  showModal: boolean,
  closeModal: () => void
}

const LabelModal = ({ showModal, closeModal }: ILabelModalProps) => {
  const [labelname, setLabelName] = useState("");
  const [key, setKey] = useState("");
  const [background, setBackground] = useState("#000000");
  const [color, setColor] = useState("#ffffff");

  const { setLabelList } = useData();

  function getLabel() {
    const label: ILabel = {
      id: uuidv4(),
      key: key,
      name: labelname,
      bg_color: background,
      color: color,
    };
    return label;
  }

  const createLabel = (e: any) => {
    e. preventDefault();
    const newLabel = getLabel();
    setLabelList((prev) => {
      return [...prev, newLabel];
    });
    closeModal();
  };

  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title as="h6" id="contained-modal-title-vcenter">
          New Label
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setKey(e.target.value)}
              maxLength={2}
              style={{ width: "70px", textTransform: "uppercase" }}
              placeholder="Id"
            />
            <Form.Text className="text-muted">
              Id should be two letters long{" "}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setLabelName(e.target.value)}
              type="text"
              placeholder="Label Name"
            />
          </Form.Group>
          <div>
            <Form.Group style={{ width: "50%", display: "inline-block" }}>
              <Form.Label>Font Color</Form.Label>
              <Form.Control
                style={{ width: "calc(100% - 5px)" }}
                type="color"
                onChange={(e) => setColor(e.target.value)}
                value={color}
                maxLength={2}
                placeholder="Id"
              />
            </Form.Group>
            <Form.Group style={{ width: "50%", display: "inline-block" }}>
              <Form.Label>Background</Form.Label>
              <Form.Control
                style={{ width: "calc(100% - 5px)" }}
                type="color"
                onChange={(e) => setBackground(e.target.value)}
                value={background}
                maxLength={2}
                placeholder="Id"
              />
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={createLabel} type="submit">
          Create Label
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LabelModal;
