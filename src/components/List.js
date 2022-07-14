import './List.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkTask, deleteTask } from '../actions/listActions';

function List() {

    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <ul>
            {tasks.map(task =>
                <li id={task.id} key={task.id}>
                    <span className={task.checked ? 'checked' : ''} onClick={() => { dispatch(checkTask(task)) }}>{task.task}</span>
                    <button onClick={() => { dispatch(deleteTask(task)) }}>X</button>
                </li>)}
        </ul>
    );

}

export default List;