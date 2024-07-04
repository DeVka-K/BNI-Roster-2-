import React from 'react';
import './App.css';
 import  ExcelToPDF from './Components/ExcelToPDF';
import { Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className="App">
      
  <Routes> 
    <Route path="/excel-to-pdf" element={<ExcelToPDF/>}/>
    
  </Routes>
      
    </div>
  );
}

export default App;
