import React, { useState, useEffect } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

//importing components
import LaneList from './lanelist';
import TaskForm from './taskform';


const Main = ({ setNavOpenStatus, navOpenStatus, labelList, selectedLabel }) => {
    const [taskFormShow, setTaskFormShow] = useState(false);
    const [SortValue, setSortValue] = useState('Due Date');

    const [tasks, setTasks] = useState([
        {
            id: Math.random() * 1000,
            label: 'Bug',
            labelid: 1,
            taskname: 'Demo task',
            description: 'this is a demo description',
            duedate: '12th Feb 2021',
            priority: 'High',
            laneid: 1
        },
        {
            id: Math.random() * 1000,
            label: 'Story',
            labelid: 2,
            taskname: 'In progress task',
            description: 'this is a demo description',
            duedate: '12th Feb 2021',
            priority: 'Medium',
            laneid: 2
        }
    ]);
    const [filteredTasks, setFilteredTasks] = useState([]);


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

    const navStatusHandler = () => {
        setNavOpenStatus(!navOpenStatus);
    }

    const SortValueHandler = (k) => {
        console.log(k);
        setSortValue(k);
    }
    const filterHandler = () => {
        if (selectedLabel === 0) {
            setFilteredTasks(tasks);
        } else {
            console.log(tasks.filter(t => t.labelid === selectedLabel));
            console.log(tasks);

            setFilteredTasks(tasks.filter(t => t.labelid === selectedLabel));
        }
    }

    useEffect(() => {
        filterHandler();
    }, [selectedLabel, tasks]);

    return (
        <>
            <div className="filtercontainer">
                <i className={`fas fa-bars menu-icon mr-3 + ${navOpenStatus ? "display-none" : ""}`} onClick={navStatusHandler}></i>
                <Dropdown style={{ display: 'inline-block' }}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        <i className="fas fa-sort mr-2"></i>
                        Sort by: {SortValue}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Due Date" onSelect={(k) => SortValueHandler(k)} >Due Date</Dropdown.Item>
                        <Dropdown.Item eventKey="Priority" onSelect={(k) => SortValueHandler(k)}>Priority</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Button
                    className="btn btn-primary"
                    style={{ display: 'inline-block', float: 'right' }}
                    onClick={() => setTaskFormShow(true)}>
                    Add Task
                        <i className="fas fa-plus ml-2"></i>
                </Button>
            </div>
            <div className="taskscontainer">
                <LaneList
                    lanes={lanes}
                    setLanes={setLanes}
                    tasks={tasks}
                    setTasks={setTasks}
                    filteredTasks={filteredTasks} />
            </div>
            <TaskForm
                taskFormShow={taskFormShow}
                setTaskFormShowToClose={() => setTaskFormShow(false)}
                tasks={tasks}
                setTasks={setTasks}
                labelList={labelList} />
        </>
    );
}

export default Main;