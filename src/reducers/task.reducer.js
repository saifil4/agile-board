const initialState = [
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
    },
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
    },
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
];

const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddTask':
            return [...state, action.payload];
        case 'DeleteTask':
            return state.filter(st => st.id !== action.payload.id);
        case 'ReplaceTasks':
            return action.payload;
        case 'UpdateTasks':
            return action.payload;
        default:
            return state;
    }
}

export default TaskReducer;