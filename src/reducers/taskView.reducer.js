
const TaskViewReducer = (state = 0, action) => {
    switch (action.type) {
        case 'CardView':
            return 0;
        case 'ListView':
            return 1;
        default:
            return state;
    }
}

export default TaskViewReducer;