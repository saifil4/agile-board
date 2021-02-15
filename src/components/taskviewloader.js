import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTask } from '../actions/actions'

//importing components
import LaneList from './lanelist';
import TaskModalLoader from './taskmodalloader';
import Header from './header';
import TaskCardView from './taskcardview';
import TaskListView from './tasklistview';



const TaskViewLoader = () => {
    const selectedLabel = useSelector(state => state.selectedLabel);
    const tasks = useSelector(state => state.Tasks);
    const filteredTasks = useSelector(state => state.FilteredTasks);
    const taskView = useSelector(state => state.TaskView);
    const Dispatch = useDispatch();
    const [lanes, setLanes] = useState([
        {
            id: 1,
            lanename: 'Backlog'
        },
        {
            id: 2,
            lanename: 'Open'
        },
        {
            id: 3,
            lanename: 'In Progress'
        },
        {
            id: 4,
            lanename: 'Done'
        }
    ]);


    const filterHandler = () => {
        if (selectedLabel === 0) {
            Dispatch(filterTask(tasks));
        } else {
            Dispatch(filterTask(tasks.filter(t => t.label.id === selectedLabel)));
        }
    }

    useEffect(() => {
        filterHandler();
    }, [selectedLabel, tasks]);

    return (
        <>
            <Header />
            <div className="lanecontainer">
                {
                    taskView === 0 ? <TaskCardView /> : <TaskListView />
                }
            </div>
            <TaskModalLoader />
        </>
    );
}

export default TaskViewLoader;