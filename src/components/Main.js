import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterLane } from '../actions/actions'

//importing components
import Header from './header/Header';
import LaneList from './task-lane/LaneList';

const Main = () => {
    const selectedLabel = useSelector(state => state.SelectedLabel);
    const lanes = useSelector(state => state.Lanes);
    const searchKeywords = useSelector(state => state.Search);
    const Dispatch = useDispatch();

    const filterHandler = () => {
        var filtered = lanes;
        if (selectedLabel === 0) {
            filtered = lanes.map(lane => {
                return { ...lane, tasks: lane.tasks.filter(task => task.taskname.includes(searchKeywords)) }
            })
        } else {
            filtered = lanes.map(lane => {
                return { ...lane, tasks: lane.tasks.filter(t => t.labelid === selectedLabel && t.taskname.includes(searchKeywords)) }
            })
        }
        Dispatch(filterLane(filtered))
    }

    useEffect(() => {
        filterHandler();
    }, [selectedLabel, lanes, searchKeywords]);

    return (
        <>
            <Header />
            <LaneList />
        </>
    );
}

export default Main;