import React from 'react';
import '../App.css';
//importing components
import TaskList from './tasklist'

const Lane = ({ lane, tasks, setTasks, filteredTasks }) => {
    const drop = (e) => {
        e.preventDefault();
        const taskid = e.dataTransfer.getData('task_id');
        var updated = tasks.map(task => {
            if (task.id === parseFloat(taskid)) {
                task.laneid = lane.id
            }
            return task;
        });
        setTasks(updated);
    }
    const dragOver = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="lanecontainer">
                <h6 className="lane-title">{lane.lanename}</h6>
                <div onDrop={drop} onDragOver={dragOver} className="lane">
                    <TaskList
                        lane={lane}
                        tasks={tasks}
                        filteredTasks={filteredTasks} />
                </div>
            </div>
        </>
    )
}

export default Lane;