const initialState = [
    {
        'id': 1,
        'key': "B",
        'name': 'Bug',
        'color': '#E53935',
        'iconclass': 'fas fa-bug'
    },
    {
        'id': 2,
        'key': "S",
        'name': 'Story',
        'color': '#7CB342',
        'iconclass': 'fas fa-th-large'
    },
    {
        'id': 3,
        'key': "T",
        'name': 'Task',
        'color': '#1E88E5',
        'iconclass': 'fas fa-tasks'
    }
];

const LabelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddLabel':
            console.log([...state, action.payload])
            return [...state, action.payload];
        case 'UpdateLabel':

            break;
        default:
            return state;
    }
}

export default LabelReducer;