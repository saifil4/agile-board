import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//importing components
import TaskList from './tasklist'
import { addTask } from '../actions/actions'

const Lane = ({ lane }) => {


    const tasks = useSelector(state => state.Tasks);
    const Dispatch = useDispatch();

    const drop = (e) => {
        e.preventDefault();
        const taskid = e.dataTransfer.getData('task_id');
        var updated = tasks.map(task => {
            if (task.id === parseFloat(taskid)) {
                task.laneid = lane.id
            }
            return task;
        });
        Dispatch(addTask(updated));
    }
    const dragOver = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="lane">
                <h6 className="lane-title">{lane.lanename}</h6>
                <div onDrop={drop} onDragOver={dragOver} className="lane-body">
                    <TaskList
                        lane={lane} />
                </div>
            </div>
        </>
    )
}

export default Lane;