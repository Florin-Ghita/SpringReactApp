// import logo from './logo.svg';
// import { Component } from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import {getAllStudents} from './client';

function App() {
    getAllStudents().then(res => res.json().then(students => {
      console.log(students);
    }));
    
 
}

export default App;
