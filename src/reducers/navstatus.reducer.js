const navOpenStatusReducer = (state = true, action) => {
    switch (action.type) {
        case 'SwitchNav':
            return !state;
        default:
            return state;
    }
};

export default navOpenStatusReducer;