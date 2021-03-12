import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TaskList from './TaskList'
import LaneTitle from './LaneTitle';
import ModalLoader from '../ModalLoader';
import TaskForm from '../task-form/TaskForm';


const Lane = ({ lane }) => {
    const [showModal, setShowModal] = useState(false);

    const OpenTaskModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    return (
        <>
            <div className="lane">
                <LaneTitle lane={lane} />
                <div onClick={(e) => OpenTaskModal(e)} className="add-button"><i className="fas fa-plus"></i></div>
                <Droppable droppableId={lane.id.toString()} key={lane.id}>
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="lane-body">
                            <TaskList
                                lane={lane} />
                        </div>
                    )}
                </Droppable>
            </div>

            <ModalLoader
                showModal={showModal}
                setShowModal={setShowModal}
                Component={TaskForm}
                entity={lane}
                entityType="lane"
            />
        </>
    )
}

export default Lane;