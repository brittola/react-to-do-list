import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/listActions';

function Form() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    return (
        <form>
            <input onChange={(e) => { setText(e.target.value) }} type="text" placeholder="Digite uma tarefa..." value={text} />
            <button onClick={(e) => { e.preventDefault(); dispatch(addTask(text)); setText('') }}>Add</button>
        </form>
    );

}

export default Form;