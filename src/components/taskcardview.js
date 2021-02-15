import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTask } from '../actions/actions'

//importing components
import LaneList from './lanelist';
import TaskModalLoader from './taskmodalloader';
import Header from './header';


const TaskCardView = () => {
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

    return (
        <>
            <LaneList
                lanes={lanes}
                setLanes={setLanes} />
        </>
    );
}

export default TaskCardView;