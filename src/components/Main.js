import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import LaneList from './task-lane/LaneList';
import { laneData } from '../data';
import { useData } from '../DataContext';

const Main = () => {

    const [searchValue, setSearchValue] = useState('');
    const { selectedLabel, setSelectedLabel } = useData();
    const [lanes, setLanes] = useState(laneData);
    const [filteredLanes, setFilteredLanes] = useState(lanes);

    useEffect(() => {
        const filterHandler = () => {
            var filtered = lanes;
            if (selectedLabel === 0) {
                filtered = lanes.map(lane => {
                    return { ...lane, tasks: lane.tasks.filter(task => task.taskname.includes(searchValue)) }
                });
            } else {
                filtered = lanes.map(lane => {
                    return { ...lane, tasks: lane.tasks.filter(task => task.labelid === selectedLabel && task.taskname.includes(searchValue)) }
                })
            }
            setFilteredLanes(filtered)
        }
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