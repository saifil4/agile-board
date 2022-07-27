import React, { useState, useEffect } from 'react';

//importing components
import Header from './header/Header';
import LaneList from './task-lane/LaneList';
import { laneData } from '../data';
import { useData } from '../DataContext';

const Main = () => {

    const [searchValue, setSearchValue] = useState('');

    const { selectedLabel, setSelectedLabel } = useData();

    const [lanes, setLanes] = useState(laneData);

    const [filteredLanes, setFilteredLanes] = useState(lanes);


    const filterHandler = () => {
        var filtered = lanes;
        if (selectedLabel === 0) {
            filtered = lanes.map(lane => {
                return { ...lane, tasks: lane.tasks.filter(task => task.taskname.includes(searchValue)) }
            });
        } else {
            filtered = lanes.map(lane => {
                return { ...lane, tasks: lane.tasks.filter(t => t.labelid === selectedLabel && t.taskname.includes(searchValue)) }
            })
        }
        setFilteredLanes(filtered)
    }

    useEffect(() => {
        filterHandler();
    }, [selectedLabel, lanes, searchValue]);

    return (
        <>
            <Header setSelectedLabel={setSelectedLabel} setSearchValue={setSearchValue} />
            <LaneList filteredLanes={filteredLanes} setFilteredLanes={setFilteredLanes} setLanes={setLanes} />
        </>
    );
}

export default Main;