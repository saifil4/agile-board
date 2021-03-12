import React, { useState, useEffect } from 'react';
import { Modal, Form, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../../actions/actions';
import NameInput from './NameInput';
import TaskTypeInput from './TaskTypeInput';
import DescriptionInput from './DescriptionInput';
import LaneInput from './LaneInput';
import DueDateInput from './DueDateInput';
import PriorityInput from './PriorityInput';

const TaskForm = ({ setTaskFormShowToClose, entity, entityType }) => {

    const [taskname, setTaskName] = useState('');
    const [duedate, setDuedate] = useState('');
    const [priority, setPriority] = useState('High');
    const [description, setDescription] = useState('');
    const [labelId, setLabelId] = useState();
    const [laneId, setLaneId] = useState();

    const Dispatch = useDispatch();

    useEffect(() => {
        if (entityType === "task") {
            setTaskName(entity.taskname);
            setDuedate(entity.duedate);
            setPriority(entity.priority);
            setDescription(entity.description);
            setLabelId(entity.labelid);
            setLaneId(entity.laneid);
        } else if (entityType === "lane") {
            setLaneId(entity.id);
        }
    }, [])

    const CreateTask = (e) => {
        e.preventDefault();
        console.log(newtask());
        Dispatch(addTask(newtask()));
        setTaskFormShowToClose();
    }


    function newtask() {
        return {
            'id': Math.random() * 1000,
            'taskname': taskname,
            'description': description,
            'duedate': duedate,
            'priority': priority,
            'labelid': labelId,
            'laneid': laneId
        }
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
                                {
                                    entityType === 'task'
                                        ?
                                        <LaneInput laneId={laneId} setLaneId={setLaneId} entity={entity} entityType={entityType} />
                                        :
                                        ''
                                }
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
                        <button className="main-btn yellow" onClick={(e) => CreateTask(e)} type="submit">Update Task</button>
                        :
                        <button className="main-btn yellow" onClick={(e) => CreateTask(e)} type="submit">Create Task</button>
                }
                <button className="main-btn grey" variant="secondary" onClick={setTaskFormShowToClose}>Cancel</button>
            </Modal.Footer>
        </>
    );
}

export default TaskForm;