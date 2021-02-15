const TaskFormModalReducer = (state = false, action) => {
    switch (action.type) {
        case 'SwitchTaskFormModal':
            return !state;
        default:
            return state;
    }
};

export default TaskFormModalReducer;