import React from 'react';
import TaskForm from './task-form/TaskForm'
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { switchtaskformmodal, taskViewMode } from '../actions/actions'

//This components loads a modal and based on different modes loads different components inside it.

const TaskFormLoader = () => {
    const taskFormModalShow = useSelector(state => state.switchTaskFormModal);
    const viewmode = useSelector(state => state.taskViewMode);
    const Dispatch = useDispatch();

    const closeModal = () => {
        Dispatch(switchtaskformmodal());
        setTimeout(() => {
            Dispatch(taskViewMode(!viewmode))
        }, 300);
    }

    return (
        <>
            <Modal
                show={taskFormModalShow}
                onHide={() => closeModal()}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <TaskForm
                    taskFormShow={taskFormModalShow}
                    setTaskFormShowToClose={() => closeModal()} />
            </Modal>
        </>
    )
}

export default TaskFormLoader;
