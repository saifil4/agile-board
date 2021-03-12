
const FilteredLanesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FilterLane':
            return action.payload;
        default:
            return state;
    }
}

export default FilteredLanesReducer;