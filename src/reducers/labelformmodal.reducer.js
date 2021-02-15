const labelFormModalReducer = (state = false, action) => {
    switch (action.type) {
        case 'SwitchLabelFormModal':
            return !state;
        default:
            return state;
    }
};

export default labelFormModalReducer;