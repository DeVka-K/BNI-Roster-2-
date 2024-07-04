import React from 'react';
import './App.css';
import  Header from './components/Header';
 import  ExcelToPDF from './components/ExcelToPDF';
import { Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
  <Routes> 
    <Route path="/excel-to-pdf" element={<ExcelToPDF/>}/>
    
  </Routes>
      
    </div>
  );
}

export default App;
