const initialState = [
    {
        id: Math.random() * 1000,
        label: {
            'id': 1,
            'key': "B",
            'name': 'Bug',
            'color': '#E53935',
            'iconclass': 'fas fa-bug'
        },
        taskname: 'Demo task',
        description: 'this is a demo description',
        duedate: '12th Feb 2021',
        priority: 'High',
        laneid: 1
    },
    {
        id: Math.random() * 1000,
        label: {
            'id': 2,
            'key': "S",
            'name': 'Story',
            'color': '#7CB342'
        },
        taskname: 'In progress task',
        description: 'this is a demo description',
        duedate: '12th Feb 2021',
        priority: 'Medium',
        laneid: 2
    },
    {
        id: Math.random() * 1000,
        label: {
            'id': 3,
            'key': "T",
            'name': 'Task',
            'color': '#1E88E5'
        },
        taskname: 'Redesign Card',
        description: 'this is a demo description',
        duedate: '12th Feb 2021',
        priority: 'Medium',
        laneid: 2
    }
];

const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddTask':
            return [...state, action.payload];
        case 'RemoveTask':

            break;
        case 'UpdateTask':

            break;
        default:
            return state;
    }
}

export default TaskReducer;