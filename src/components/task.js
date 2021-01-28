import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Task = ({ task }) => {
    const [isInDrag, setIsInDrag] = useState(false);

    const DragStartHandler = (e) => {
        setIsInDrag(true);
        e.dataTransfer.setData('task_id', task.id);
    }

    return (
        <Card
            style={{ background: isInDrag ? 'lightblue' : 'white', margin: '10px' }}
            draggable="true"
            onDragStart={DragStartHandler}>
            <Card.Body>
                <Card.Title as="h6">{task.taskname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{task.duedate}</Card.Subtitle>
                <Card.Text>
                    {task.description}
                </Card.Text>
                <div>
                    {task.priority} <Badge variant="success">{task.label}</Badge>
                </div>

            </Card.Body>
        </Card>
    )
}

export default Task;