import Task from "../components/Task";

export default function listReducer(state = [], action) {

    switch (action.type) {
        
        case 'ADD_TASK':
            let task = new Task(action.payload);
            return [...state, task];
        case 'CHECK_TASK':
            state.forEach(item => {
                if (item.id === action.payload.id) {
                    item.checked = !item.checked;
                }
            });
            return [...state];
            
        case 'DELETE_TASK':
            let updatedTasks = state.filter(item => item.id !== action.payload.id);
            return [...updatedTasks];
        
        default:
            return state;
    }

}