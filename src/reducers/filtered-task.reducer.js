
const FilteredTasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'FilterTask':
            return action.payload;
        default:
            return state;
    }
}

export default FilteredTasksReducer;