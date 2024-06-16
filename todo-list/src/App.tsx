import React from 'react';
import './styles/global.css'
import './App.css';
import { Header } from './components/header/header';
import { Tasks } from './components/tasks/tasks';
import { Refs } from './components/concepts/refsConcept';

function App() {


  return (
    <>
    <Header />
    <Tasks/>
    
    <Refs />
    </>

  );
}

export default App;
