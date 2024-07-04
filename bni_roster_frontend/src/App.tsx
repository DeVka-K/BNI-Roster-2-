import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import CsvToPdf from './Components/CsvtoPdf';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import JsontoPdf from './Components/JsontoPdf';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/json-to-pdf"    element={<JsontoPdf/>}/>
      <Route path="/csv-to-pdf" element={<CsvToPdf/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
