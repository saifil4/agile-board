
const selectedTaskReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SetSelectedTask':
            return action.payload;
        default:
            return state;
    }
}

export default selectedTaskReducer;