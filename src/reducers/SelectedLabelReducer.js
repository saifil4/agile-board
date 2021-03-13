
const SelectedLabelReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SetSelectedLabel':
            return action.payload;
        default:
            return state;
    }
}

export default SelectedLabelReducer;