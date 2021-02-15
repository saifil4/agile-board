import { combineReducers } from 'redux';

import navOpenStatusReducer from './navstatus.reducer';
import labelFormModalReducer from './labelformmodal.reducer';
import LabelReducer from './label.reducer';
import selectedLabelReducer from './selectedlabel.reducer';
import TaskReducer from './task.reducer';
import TaskFormModalReducer from './taskformmodal.reducer';
import selectedTaskReducer from './selectedtask.reducer';
import TaskFormModeReducer from './taskFormMode.reducer';
import FilteredTasksReducer from './filtered-task.reducer';
import TaskViewReducer from './taskView.reducer';

const rootReducer = combineReducers({
    isNavOpen: navOpenStatusReducer,
    switchLabelFormModal: labelFormModalReducer,
    labelList: LabelReducer,
    selectedLabel: selectedLabelReducer,
    switchTaskFormModal: TaskFormModalReducer,
    Tasks: TaskReducer,
    selectedTask: selectedTaskReducer,
    taskViewMode: TaskFormModeReducer,
    FilteredTasks: FilteredTasksReducer,
    TaskView: TaskViewReducer
});

export default rootReducer;