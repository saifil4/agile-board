import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
const TaskViewer = () => {
    const selectedTask = useSelector(state => state.selectedTask);
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {selectedTask.taskname}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {selectedTask.description}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary" type="submit">Edit</Button>
            </Modal.Footer>
        </>
    );
}

export default TaskViewer;