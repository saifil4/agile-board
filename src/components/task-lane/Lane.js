import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import LaneTitle from './LaneTitle';
import ModalLoader from '../ModalLoader';
import TaskForm from '../task-form/TaskForm';
import Task from './Task';
import TaskModal from '../TaskModal';


const Lane = ({ lane, setLanes }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }


    const addTask = (newTask) => {
        setLanes((prev) => {
            return prev.map(ln => {
                if (ln.id === lane.id) {
                    return { ...ln, tasks: [...ln.tasks, newTask] }
                }
                return ln
            })
        })
    }

    const updateTask = (updatedTask) => {
        setLanes((prev) => {
            return prev.map(ln => {
                if (ln.id === lane.id) {
                    return { ...ln, tasks: ln.tasks.map(task => task.id === updatedTask.id ? updatedTask : task) }
                }
                return ln
            })
        })
    }

    return (
        <>
            <div className="lane">
                <LaneTitle lane={lane} />
                <div onClick={(e) => openModal(e)} className="add-button"><i className="fas fa-plus"></i></div>
                <Droppable droppableId={lane.id.toString()} key={lane.id}>
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="lane-body">
                            {
                                lane.tasks.map((task, index) => (
                                    <Task
                                        index={index}
                                        updateTask={updateTask}
                                        key={task.id}
                                        task={task} />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            <TaskModal
                save={addTask}
                showModal={showModal}
                closeModal={closeModal} />
        </>
    )
}

export default Lane;