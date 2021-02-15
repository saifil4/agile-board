import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../actions/actions'

const TaskForm = ({ setTaskFormShowToClose }) => {

    const [taskname, setTaskName] = useState('');
    const [duedate, setDuedate] = useState('');
    const [priority, setPriority] = useState('High');
    const [description, setDescription] = useState('');
    const [label, setLabel] = useState({});

    const labelList = useSelector(state => state.labelList);
    const tasks = useSelector(state => state.Tasks);
    const Dispatch = useDispatch();

    const CreateTask = (e) => {
        e.preventDefault();
        Dispatch(addTask(newtask()));
        setTaskFormShowToClose();
    }

    const LabelHandler = (e) => {
        console.log(e.target.value);
        setLabel(JSON.parse(e.target.value));
    }

    function newtask() {
        return {
            'id': Math.random() * 1000,
            'taskname': taskname,
            'description': description,
            'duedate': duedate,
            'priority': priority,
            'label': label,
            'laneid': 1
        }
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" onChange={(e) => LabelHandler(e)}>
                            <option value=''>
                                Select
                            </option>
                            {
                                labelList.map(label => (
                                    <option value={JSON.stringify(label)} key={label.id}>
                                        {label.name}
                                    </option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={e => setTaskName(e.target.value)} type="text" placeholder="Task Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Due date</Form.Label>
                        <Form.Control onChange={e => setDuedate(e.target.value)} type="date" placeholder="Enter due date" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control onChange={e => setPriority(e.target.value)} as="select">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={e => setDescription(e.target.value)} as="textarea" rows={2} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={setTaskFormShowToClose}>Cancel</Button>
                <Button variant="primary" onClick={(e) => CreateTask(e)} type="submit">Create Task</Button>
            </Modal.Footer>
        </>

    );
}

export default TaskForm;