import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterLane } from '../actions/actions'

//importing components
import Header from './header/Header';
import LaneList from './task-lane/LaneList';

const Main = () => {

    const [searchValue, setSearchValue] = useState('');
    const [selectedLabel, setSelectedLabel] = useState();

    const Dispatch = useDispatch();

    let [lanes, setLanes] = useState([
        {
            id: 1,
            lanename: 'Backlog',
            tasks: [
                {
                    id: Math.random() * 1000,
                    labelid: 1,
                    taskname: 'Misspelling on Navbar',
                    description: 'this is a demo description',
                    duedate: '2021-02-12',
                    priority: 3,
                    laneid: 1
                }
            ]
        },
        {
            id: 2,
            lanename: 'Open',
            tasks: [
                {
                    id: Math.random() * 1000,
                    labelid: 2,
                    taskname: 'Add Task button hidden in Mobile view',
                    description: 'this is a demo description',
                    duedate: '2021-02-12',
                    priority: 1,
                    laneid: 2
                },
                {
                    id: Math.random() * 1000,
                    labelid: 3,
                    taskname: 'Design Prototype for Blog Page',
                    description: 'this is a demo description',
                    duedate: '2021-02-12',
                    priority: 2,
                    laneid: 2,
                    order: 1
                },
                {
                    id: Math.random() * 1000,
                    labelid: 3,
                    taskname: 'Update Header',
                    description: 'Distribute header into multiple components',
                    duedate: '2021-02-12',
                    priority: 1,
                    laneid: 2
                }
            ]
        },
        {
            id: 3,
            lanename: 'In Progress',
            tasks: [
                {
                    id: Math.random() * 1000,
                    labelid: 3,
                    taskname: 'Component Redesign',
                    description: 'Distribute header into multiple components',
                    duedate: '2021-02-12',
                    priority: 2,
                    laneid: 3
                }
            ]
        },
        {
            id: 4,
            lanename: 'Done',
            tasks: [
                {
                    id: Math.random() * 1000,
                    labelid: 2,
                    taskname: 'Change Task Form Format',
                    description: 'this is a demo description',
                    duedate: '2021-02-12',
                    priority: 2,
                    laneid: 4
                },
            ]
        }
    ]);

    const [filteredLanes, setFilteredLanes] = useState(lanes);


    const filterHandler = () => {
        var filtered = lanes;
        if (selectedLabel === 0) {
            setFilteredLanes(lanes.map(lane => {
                return { ...lane, tasks: lane.tasks.filter(task => task.taskname.includes(searchValue)) }
            }));
        } else {
            setFilteredLanes(lanes.map(lane => {
                return { ...lane, tasks: lane.tasks.filter(t => t.labelid === selectedLabel && t.taskname.includes(searchValue)) }
            }))
        }
        setFilteredLanes(filtered)
    }

    useEffect(() => {
        filterHandler();
    }, [selectedLabel, lanes, searchValue]);

    return (
        <>
            <Header setSelectedLabel={setSelectedLabel} setSearchValue={setSearchValue} />
            <LaneList filteredLanes={filteredLanes} setFilteredLanes={setFilteredLanes} />
        </>
    );
}

export default Main;