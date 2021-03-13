
const SearchReducer = (state = "", action) => {
    switch (action.type) {
        case 'SetSearchKeywords':
            return action.payload;
        default:
            return state;
    }
}

export default SearchReducer;