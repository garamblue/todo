import './App.css';
import TodoList from './components/ToDoList/TodoList';
import Header from './components/Header/Header';
import { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['전체', '실천', '미실천'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
