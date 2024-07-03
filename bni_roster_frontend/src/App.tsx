import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route,Routes } from 'react-router-dom';
import JsontoPdf from './Components/JsontoPdf';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/json-to-pdf"    element={<JsontoPdf/>}/>
      </Routes>







      <Footer></Footer>
      
    </div>
  );
}

export default App;
