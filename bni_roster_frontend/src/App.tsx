import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import CsvToPdf from './Components/CsvtoPdf';






function App() {
  return (
    <div className="App">
 <Routes>

  <Route path="/" element={<HomePage/>}/>
  <Route path="/csv-to-pdf" element={<CsvToPdf/>}/>






 </Routes>
      
    </div>
  );
}

export default App;
