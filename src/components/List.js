import './List.css';

function List(props){

    return (
        <ul>
            {props.tasks.map(task =>
            <li id={task.id} key={task.id}>
                <span className={task.checked ? 'checked' : ''} onClick={() => {props.checkTask(task)}}>{task.task}</span>
                <button onClick={() => {props.deleteTask(task)}}>X</button>
            </li>)}
        </ul>
    );

}

export default List;