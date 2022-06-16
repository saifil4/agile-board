import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Container, Row, Col } from 'react-bootstrap';
import TaskTypeInput from './task-form/TaskTypeInput';
import NameInput from './task-form/NameInput';
import DescriptionInput from './task-form/DescriptionInput';
import DueDateInput from './task-form/DueDateInput';
import PriorityInput from './task-form/PriorityInput';

const defaultTask = {
    id: Math.random(),
    labelid: 1,
    taskname: '',
    description: '',
    duedate: '',
    priority: 1,
}

const TaskModal = ({ showModal, closeModal, task = null, save }) => {

    const [selectedTask, setSelectedTask] = useState(task ? task : defaultTask);

    const handleSave = () => {
        save(selectedTask);
        closeModal()
    }

    const handleClose = () => {
        if (task) setSelectedTask(task)
        closeModal()
    }

    return (

        <>
            <Modal
                show={showModal}
                onHide={() => closeModal()}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title as="h6" id="contained-modal-title-vcenter">
                        New Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row>
                                <Col md="8">
                                    <TaskTypeInput
                                        value={selectedTask.labelid}
                                        onChange={(e) => setSelectedTask({ ...selectedTask, labelid: parseInt(e.target.value) })} />
                                    <NameInput
                                        value={selectedTask.taskname}
                                        onChange={(e) => setSelectedTask({ ...selectedTask, taskname: e.target.value })} />
                                    <DescriptionInput
                                        value={selectedTask.description}
                                        onChange={(e) => setSelectedTask({ ...selectedTask, description: e.target.value })} />
                                </Col>
                                <Col md="4">
                                    <DueDateInput
                                        value={selectedTask.duedate}
                                        onChange={(e) => setSelectedTask({ ...selectedTask, duedate: e.target.value })} />
                                    <PriorityInput
                                        value={selectedTask.priority}
                                        onChange={(e) => setSelectedTask({ ...selectedTask, priority: parseInt(e.target.value) })} />
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="main-btn yellow" type="submit" onClick={handleSave}> {task ? 'Update Task' : 'Create Task'}</button>
                    <button className="main-btn grey" variant="secondary" onClick={handleClose}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TaskModal;