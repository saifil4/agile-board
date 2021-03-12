import { combineReducers } from 'redux';

import labelFormModalReducer from './labelformmodal.reducer';
import LabelReducer from './LabelReducer';
import selectedLabelReducer from './selectedlabel.reducer';
import TaskReducer from './task.reducer';
import TaskFormModalReducer from './taskformmodal.reducer';
import selectedTaskReducer from './selectedtask.reducer';
import FilteredTasksReducer from './FilteredTaskReducer';
import LanesReducer from './LanesReducer';
import SearchReducer from './Search.reducer';

const rootReducer = combineReducers({
    switchLabelFormModal: labelFormModalReducer,
    labelList: LabelReducer,
    selectedLabel: selectedLabelReducer,
    switchTaskFormModal: TaskFormModalReducer,
    Tasks: TaskReducer,
    selectedTask: selectedTaskReducer,
    FilteredTasks: FilteredTasksReducer,
    Lanes: LanesReducer,
    Search: SearchReducer
});

export default rootReducer;