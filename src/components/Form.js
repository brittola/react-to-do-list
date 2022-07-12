import { useState } from 'react';

function Form(props) {

    const [text, setText] = useState('');

    return (
        <form>
            <input onChange={(e) => { setText(e.target.value) }} type="text" placeholder="Digite uma tarefa..." value={text} />
            <button onClick={(e) => {e.preventDefault(); props.addTask(text); setText('')}}>Add</button>
        </form>
    );

}

export default Form;