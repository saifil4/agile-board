const initialState = [
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
];

const LanesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddLane':
            // return [...state, action.payload];
            break
        case 'RemoveLane':

            break;
        case 'UpdateLane':
            return state.map(st => {
                if (st.id === action.payload.id) {
                    return { ...st, lanename: action.payload.lanename };
                }
                return st;
            });
        default:
            return state;
    }
}

export default LanesReducer;