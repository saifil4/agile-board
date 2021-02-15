import React from 'react';
import TaskViewer from './taskviewer'
import TaskForm from './taskform'
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { switchtaskformmodal, taskViewMode } from '../actions/actions'

//This components loads a modal and based on different modes loads different components inside it.

const TaskModalLoader = () => {
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
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                {
                    viewmode ?
                        <TaskViewer />
                        :
                        <TaskForm
                            taskFormShow={taskFormModalShow}
                            setTaskFormShowToClose={() => closeModal()} />

                }
            </Modal>
        </>
    )
}

export default TaskModalLoader;
