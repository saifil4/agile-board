import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskList = ({ lane }) => {
    let filteredTasks = useSelector(state => state.FilteredTasks);
    // filteredTasks = filteredTasks.sort((a, b) => (a.order > b.order) ? a : ((b.order > a.order) ? -1 : b));

    return (
        <>
            {
                filteredTasks.filter(fil => fil.laneid === lane.id).map((task, index) => (
                    <Task
                        index={index}
                        key={task.id}
                        task={task}
                        lane={lane} />
                ))
            }
        </>
    )
}

export default TaskList;