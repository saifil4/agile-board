const initialState = [
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
                priority: {
                    name: 'High',
                    value: '3',
                    color: '#e01c13'
                },
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
                priority: {
                    name: 'Low',
                    value: '1',
                    color: '#abcd38'
                },
                laneid: 2
            },
            {
                id: Math.random() * 1000,
                labelid: 3,
                taskname: 'Design Protottype for Blog Page',
                description: 'this is a demo description',
                duedate: '2021-02-12',
                priority: {
                    name: 'Medium',
                    value: '2',
                    color: '#f6b32d'
                },
                laneid: 2,
                order: 1
            },
            {
                id: Math.random() * 1000,
                labelid: 3,
                taskname: 'Update Header',
                description: 'Distribute header into multiple components',
                duedate: '2021-02-12',
                priority: {
                    name: 'Low',
                    value: '1',
                    color: '#abcd38'
                },
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
                priority: {
                    name: 'Medium',
                    value: '2',
                    color: '#f6b32d'
                },
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
                priority: {
                    name: 'Medium',
                    value: '2',
                    color: '#f6b32d'
                },
                laneid: 4
            },
        ]
    }
];

const LanesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddLane':
            // return [...state, action.payload];
            break
        case 'UpdateLanes':
            return action.payload;
        case 'UpdateLaneName':
            return state.map(st => {
                if (st.id === action.payload.id) {
                    return { ...st, lanename: action.payload.lanename };
                }
                return st;
            });
        case 'AddTask':
            return state.map(st => {
                if (st.id === action.payload.laneid) {
                    return { ...st, tasks: [...st.tasks, action.payload] };
                }
                return st;
            });
        case 'UpdateTask':
            return state.map(st => {
                if (st.id === action.payload.laneid) {
                    return {
                        ...st, tasks: st.tasks.map(task => {
                            if (task.id === action.payload.id) {
                                return {
                                    ...task,
                                    labelid: action.payload.labelid,
                                    taskname: action.payload.taskname,
                                    description: action.payload.description,
                                    duedate: action.payload.duedate,
                                    priority: action.payload.priority,
                                    laneid: action.payload.laneid
                                }
                            }
                            return task;
                        })
                    };
                }
                return st;
            });
        case 'DeleteTask':
            return state.map(st => {
                return { ...st, tasks: st.tasks.filter(task => task.id !== action.payload) };
            });
        default:
            return state;
    }
}

export default LanesReducer;