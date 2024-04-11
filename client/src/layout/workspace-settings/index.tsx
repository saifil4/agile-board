import { Modal } from "react-bootstrap";
import { IWorkspace } from "data";

interface ITaskFormProps {
  showModal: boolean,
  closeModal: () => void,
  workspace?: IWorkspace | null,
}

const WorkSpaceSettings = ({ showModal, closeModal, workspace }: ITaskFormProps) => {

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal scrollable show={showModal} onHide={() => closeModal()} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Workspace settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          workspace?.name
        }
      </Modal.Body>
      <Modal.Footer>
        <button className="main-btn" onClick={handleClose}>
          Save
        </button>
        <button className="main-btn grey" onClick={handleClose}>
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default WorkSpaceSettings;
