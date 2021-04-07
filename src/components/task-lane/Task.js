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
                            <i title={`Priority: ${task.priority.name}`} style={{ color: task.priority.color }} className="fas fa-circle mr-1"></i>
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