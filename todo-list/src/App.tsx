import React from 'react';
import './styles/global.css'
import './App.css';
import { Header } from './components/header/header';
import { Tasks } from './components/tasks/tasks';
import { Refs } from './components/concepts/refsConcept';
import { Memoization } from './components/concepts/memo';

function App() {


  return (
    <>
    <Header />
    <Tasks/>
    
    <Refs />

    <Memoization financialData={{ incomes: [20, 50, 100], outcomes: [10, 20,110, 20] }}/>
    </>

  );
}

export default App;
