import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTask } from '../actions/actions'


const TaskListView = () => {
    const selectedLabel = useSelector(state => state.selectedLabel);
    const tasks = useSelector(state => state.Tasks);
    const filteredTasks = useSelector(state => state.FilteredTasks);
    const Dispatch = useDispatch();


    return (
        <>
            <table className="tasktable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map(ft => (
                        <tr>
                            <td>{ft.taskname}</td>
                            <td>
                                <div style={{ 'background': ft.label.color }} class="labelkey mr-2">{ft.label.key}</div>
                                {ft.label.name}
                            </td>
                            <td>{ft.duedate}</td>
                            <td></td>
                            <td>{ft.priority}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
}

export default TaskListView;