import React from 'react';
import './styles/global.css'
import './App.css';
import { Header } from './components/header/header';
import { Tasks } from './components/tasks/tasks';
import { Refs } from './components/concepts/refsConcept';
import { Memoization } from './components/concepts/memo';
import { TasksProvider } from './components/context/tasksContext';

function App() {


  return (
    <TasksProvider>
      <Header />
      <Tasks/>
      
    </TasksProvider>

  );
}

export default App;
