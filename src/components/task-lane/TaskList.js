import React from 'react';
import Task from './Task';

const TaskList = ({ lane }) => {
    return (
        <>
            {
                lane.tasks.map((task, index) => (
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