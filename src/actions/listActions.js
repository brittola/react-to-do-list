export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        payload: text
    }
}

export const checkTask = (task) => {
    return {
        type: 'CHECK_TASK',
        payload: task
    }
}

export const deleteTask = (task) => {
    return {
        type: 'DELETE_TASK',
        payload: task
    }
}