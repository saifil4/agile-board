import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { deleteTask } from '../../actions/actions'
import ModalLoader from '../ModalLoader';
import TaskForm from '../task-form/TaskForm';

const Task = ({ index, task }) => {

    const Dispatch = useDispatch();
    const Labels = useSelector(state => state.labelList);
    const [showModal, setShowModal] = useState(false);

    const OpenTaskModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    const priorityList = [
        {
            name: 'High',
            value: 3,
            color: '#e01c13'
        },
        {
            name: 'Medium',
            value: 2,
            color: '#f6b32d'
        },
        {
            name: 'Low',
            value: 1,
            color: '#abcd38'
        }
    ];

    const priorityColor = () => {
        return priorityList.find(pl => pl.value === task.priority).color;
    }
    const priorityName = () => {
        return priorityList.find(pl => pl.value === task.priority).name;
    }

    const getLabel = () => {
        return Labels.find(label => label.id === task.labelid);
    }

    const Label = getLabel();

    const handleDelete = (e) => {
        e.preventDefault();
        Dispatch(deleteTask(task.id));
    }


    return (
        <>
            <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}>

                {(provided) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="taskcard"
                        onClick={(e) => OpenTaskModal(e)}>
                        <div className="title">
                            <i title={`Priority: ${priorityName()}`} style={{ color: priorityColor() }} className="fas fa-circle mr-1"></i>
                            {task.taskname}
                        </div>
                        <div style={{ 'background': Label.bgcolor, color: Label.color }} className="pill">
                            {Label.name}
                        </div>
                        <div className="duedate">
                            {task.duedate}
                            <i onClick={e => handleDelete(e)} className="fas fa-trash float-right delete-icon"></i>
                        </div>
                    </div>
                )}
            </Draggable>
            <ModalLoader
                showModal={showModal}
                setShowModal={setShowModal}
                Component={TaskForm}
                entity={task}
                entityType="task"
            />
        </>
    )
}

export default Task;