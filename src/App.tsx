import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import ToDoForm from './components/ToDoForm';
import DeletedItems from './components/DeletedItems'
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ToDoForm />} />
        <Route path="/deleted" element={<DeletedItems />} />
      </Routes>
    </div>
  );
}

export default App;
