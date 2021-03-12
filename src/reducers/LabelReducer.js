const initialState = [
    {
        'id': 1,
        'key': "B",
        'name': 'Bug',
        'bgcolor': '#E53935',
        'color': '#ffffff'
    },
    {
        'id': 2,
        'key': "S",
        'name': 'Story',
        'bgcolor': '#7CB342',
        'color': '#ffffff'
    },
    {
        'id': 3,
        'key': "T",
        'name': 'Task',
        'bgcolor': '#1E88E5',
        'color': '#ffffff'
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