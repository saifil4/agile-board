import React, { useState } from 'react';
import { Modal, Form, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../../actions/actions';
import NameInput from './NameInput';
import TaskTypeInput from './TaskTypeInput';
import DescriptionInput from './DescriptionInput';
import DueDateInput from './DueDateInput';
import PriorityInput from './PriorityInput';

const TaskForm = ({ closeForm, entity, entityType }) => {

    const [taskname, setTaskName] = useState(entity.taskname);
    const [duedate, setDuedate] = useState(entity.duedate);
    const [priority, setPriority] = useState(entityType === 'task' ? entity.priority : 3);
    const [description, setDescription] = useState(entity.description);
    const [labelId, setLabelId] = useState(entity.labelid);

    const Dispatch = useDispatch();

    const CreateTask = (e) => {
        e.preventDefault();
        Dispatch(addTask(newtask()));
        closeForm();
    }

    const UpdateTask1 = (e) => {
        e.preventDefault();
        Dispatch(updateTask(updatedtask()));
        closeForm();
    }


    function newtask() {
        return {
            'id': Math.random() * 1000,
            'taskname': taskname,
            'description': description,
            'duedate': duedate,
            'priority': priority,
            'labelid': labelId,
            'laneid': entity.id
        }
    }

    function updatedtask() {
        var task = {
            'id': entity.id,
            'taskname': taskname,
            'description': description,
            'duedate': duedate,
            'priority': priority,
            'labelid': labelId,
            'laneid': entity.laneid
        }
        return task;
    }

    return (
        <>
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
                                <TaskTypeInput labelId={labelId} setLabelId={setLabelId} />
                                <NameInput taskname={taskname} setTaskName={setTaskName} />
                                <DescriptionInput description={description} setDescription={setDescription} />
                            </Col>
                            <Col md="4">
                                <DueDateInput duedate={duedate} setDuedate={setDuedate} />
                                <PriorityInput priority={priority} setPriority={setPriority} />
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {
                    entityType === "task"
                        ?
                        <button className="main-btn yellow" onClick={(e) => UpdateTask1(e)} type="submit">Update Task</button>
                        :
                        <button className="main-btn yellow" onClick={(e) => CreateTask(e)} type="submit">Create Task</button>
                }
                <button className="main-btn grey" variant="secondary" onClick={closeForm}>Cancel</button>
            </Modal.Footer>
        </>
    );
}

export default TaskForm;