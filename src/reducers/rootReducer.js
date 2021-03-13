import { combineReducers } from 'redux';
import LabelReducer from './LabelReducer';
import SelectedLabelReducer from './SelectedLabelReducer';
import FilteredLanesReducer from './FilteredLanesReducer';
import LanesReducer from './LanesReducer';
import SearchReducer from './SearchReducer';

const rootReducer = combineReducers({
    labelList: LabelReducer,
    SelectedLabel: SelectedLabelReducer,
    FilteredLanes: FilteredLanesReducer,
    Lanes: LanesReducer,
    Search: SearchReducer
});

export default rootReducer;