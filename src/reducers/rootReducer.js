import { combineReducers } from 'redux';
import LabelReducer from './LabelReducer';
import selectedLabelReducer from './selectedlabel.reducer';
import FilteredLanesReducer from './FilteredLanesReducer';
import LanesReducer from './LanesReducer';
import SearchReducer from './Search.reducer';

const rootReducer = combineReducers({
    labelList: LabelReducer,
    selectedLabel: selectedLabelReducer,
    FilteredLanes: FilteredLanesReducer,
    Lanes: LanesReducer,
    Search: SearchReducer
});

export default rootReducer;