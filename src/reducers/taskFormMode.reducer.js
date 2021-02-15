const TaskFormModeReducer = (state = false, action) => {
    switch (action.type) {
        case 'TaskViewMode':
            return action.payload;
        default:
            return state;
    }
};

export default TaskFormModeReducer;