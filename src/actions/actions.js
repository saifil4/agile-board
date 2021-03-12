
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

export const updateTask = (task) => {
    return {
        type: 'UpdateTask',
        payload: task
    }
}

export const deleteTask = (task) => {
    return {
        type: 'DeleteTask',
        payload: task
    }
}

export const filterLane = (filteredlanes) => {
    return {
        type: 'FilterLane',
        payload: filteredlanes
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


export const updateLane = (lane) => {
    return {
        type: 'UpdateLane',
        payload: lane
    }
}

export const search = (keywords) => {
    return {
        type: 'SetSearchKeywords',
        payload: keywords
    }
}



