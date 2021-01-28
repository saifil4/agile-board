import React from 'react';
import '../App.css';
import Task from './task'

const TaskList = ({ tasks, lane, filteredTasks }) => {
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