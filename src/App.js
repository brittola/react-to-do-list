import './App.css';
import Form from './components/Form';
import List from './components/List';
import { createStore } from 'redux';
import listReducer from './reducers/listReducer';
import { Provider } from 'react-redux';

function getData() {
  if(localStorage.getItem('tasks'))
      return JSON.parse(localStorage.getItem('tasks'));
  else
      return [];
}

const store = createStore(listReducer, getData());

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState()));
});

function App() {

  return (
    <div className="container">
      <h1>TO-DO LIST</h1>
      <Provider store={store}>
        <Form />
        <List />
      </Provider>
    </div>
  );
}

export default App;