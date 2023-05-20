import { useState } from 'react';
import './App.css';
import { TodoContext } from './components/Context';
import TodoApp from './components/TodoApp/TodoApp';

function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem(('mylist'))))
  let checkStorage = () => {
    if (localStorage.getItem('mylist') === null) {
        localStorage.setItem('mylist', JSON.stringify([]))
    }
    else {
        JSON.parse(localStorage.getItem('mylist'))
    }
}
checkStorage()



  const data = {list, setList}
  return (
    <TodoContext.Provider value={data}>
      <div className='App'>
        <TodoApp />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
