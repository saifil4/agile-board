import React from 'react';
import '../App.css';
import Task from './task';
import { useSelector } from 'react-redux';

const TaskList = ({ lane }) => {
    const filteredTasks = useSelector(state => state.FilteredTasks);
    return (
        <>
            {
                filteredTasks.filter(fil => fil.laneid === lane.id).map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        lane={lane} />
                ))
            }
        </>
    )
}

export default TaskList;