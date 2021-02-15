import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { switchtaskformmodal, taskViewMode, setSelectedTask } from '../actions/actions'

const Task = ({ task }) => {
    const [isInDrag, setIsInDrag] = useState(false);
    const Dispatch = useDispatch();
    const DragStartHandler = (e) => {
        setIsInDrag(true);
        e.dataTransfer.setData('task_id', task.id);
    }

    const OpenTaskModal = (e) => {
        e.preventDefault();
        Dispatch(setSelectedTask(task))
        Dispatch(taskViewMode(true));
        Dispatch(switchtaskformmodal());
    }

    return (
        <Card
            style={{ background: isInDrag ? 'lightblue' : 'white', margin: '10px' }}
            draggable="true"
            onClick={(e) => OpenTaskModal(e)}
            onDragStart={DragStartHandler}>
            <Card.Body>
                <Card.Title as="h6">{task.taskname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{task.duedate}</Card.Subtitle>

                <Badge style={{ background: task.label.color }} variant="success">{task.label.name}</Badge>

                {task.priority}
                {/* <Card.Text>
                    {task.description}
                </Card.Text> */}

            </Card.Body>
        </Card>
    )
}

export default Task;