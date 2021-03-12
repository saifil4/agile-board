export const switchnav = () => {
    return {
        type: 'SwitchNav'
    }
}

export const taskViewMode = (IsViewMode) => {
    return {
        type: 'TaskViewMode',
        payload: IsViewMode
    }
}

export const switchlabelformmodal = () => {
    return {
        type: 'SwitchLabelFormModal'
    }
}


export const switchtaskformmodal = () => {
    return {
        type: 'SwitchTaskFormModal'
    }
}

export const addLabel = (label) => {
    return {
        type: 'AddLabel',
        payload: label
    }
}

export const addTask = (task) => {
    return {
        type: 'AddTask',
        payload: task
    }
}



export const deleteTask = (task) => {
    return {
        type: 'DeleteTask',
        payload: task
    }
}

export const filterTask = (filteredtasks) => {
    return {
        type: 'FilterTask',
        payload: filteredtasks
    }
}

export const updateLabel = (label) => {
    return {
        type: 'UpdateLabel',
        payload: label
    }
}

export const setSelectedLabel = (label) => {
    return {
        type: 'SetSelectedLabel',
        payload: label
    }
}

export const setSelectedTask = (task) => {
    return {
        type: 'SetSelectedTask',
        payload: task
    }
}

export const toggleTaskView = () => {
    return {
        type: 'ToggleTaskView'
    }
}


export const updateLane = (lane) => {
    return {
        type: 'UpdateLane',
        payload: lane
    }
}

export const replaceTasks = (tasks) => {
    return {
        type: 'ReplaceTasks',
        payload: tasks
    }
}

export const search = (keywords) => {
    return {
        type: 'SetSearchKeywords',
        payload: keywords
    }
}



