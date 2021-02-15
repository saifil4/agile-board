import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchtaskformmodal, switchnav, taskViewMode, cardView, listView } from '../actions/actions'

const Header = () => {
    const Dispatch = useDispatch();
    const isNavOpen = useSelector(state => state.isNavOpen);
    const [SortValue, setSortValue] = useState('Due Date');

    const SortValueHandler = (k) => {
        console.log(k);
        setSortValue(k);
    }

    const OpenTaskModal = (e) => {
        e.preventDefault();
        Dispatch(taskViewMode(false));
        Dispatch(switchtaskformmodal());
    }

    return (
        <div className="filtercontainer">
            <i className={`fas fa-bars menu-icon mr-3 + ${isNavOpen ? "display-none" : ""}`} onClick={() => Dispatch(switchnav())}></i>
            {/* <Dropdown style={{ display: 'inline-block' }}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    <i className="fas fa-sort mr-2"></i>
                        Sort by: {SortValue}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="Due Date" onSelect={(k) => SortValueHandler(k)} >Due Date</Dropdown.Item>
                    <Dropdown.Item eventKey="Priority" onSelect={(k) => SortValueHandler(k)}>Priority</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
            <div style={{ display: 'inline-block' }}>
                <i onClick={() => Dispatch(cardView())} style={{ fontSize: '18px' }} class="fas fa-th mr-2"></i>
                <i onClick={() => Dispatch(listView())} style={{ fontSize: '18px' }} class="fas fa-stream"></i>
            </div>

            <input className="searchbox" type="text" placeholder="Search" />

            <button
                className="add-task"
                style={{ display: 'inline-block', float: 'right' }}
                onClick={(e) => OpenTaskModal(e)}>
                Add Task
                        <i className="fas fa-plus ml-2"></i>
            </button>
        </div>
    )
}

export default Header;