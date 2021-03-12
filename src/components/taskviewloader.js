import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTask } from '../actions/actions'

//importing components
import TaskFormLoader from './TaskFormLoader';
import Header from './header/Header';
import TaskLaneView from './task-lane/TaskLaneView';



const TaskViewLoader = () => {
    const selectedLabel = useSelector(state => state.selectedLabel);
    const tasks = useSelector(state => state.Tasks);
    const searchKeywords = useSelector(state => state.Search);
    const Dispatch = useDispatch();

    const filterHandler = () => {
        // if (selectedLabel === 0) {
        //     Dispatch(filterTask(tasks.filter(task=>task.taskname.includes(searchKeywords))));
        // } else {
        //     Dispatch(filterTask(tasks.filter(t => t.labelid === selectedLabel && t.taskname.includes(searchKeywords))));
        // }
        if (selectedLabel === 0) {
            Dispatch(filterTask(tasks));
        } else {
            Dispatch(filterTask(tasks.filter(t => t.labelid === selectedLabel && t.taskname.includes(searchKeywords))));
        }
    }

    useEffect(() => {
        filterHandler();
    }, [selectedLabel, tasks, searchKeywords]);

    return (
        <>
            <Header />
            <div className="lanecontainer">
                <TaskLaneView />
            </div>
            <TaskFormLoader />
        </>
    );
}

export default TaskViewLoader;