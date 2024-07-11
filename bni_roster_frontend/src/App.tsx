import React from 'react';
import './App.css';
import HomePage from "./Pages/Homepage/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route,Routes } from 'react-router-dom';
import JsontoPdf from './Components/JsontoPdf';
import ApiDocumentation from './Components/ApiDocumentation';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/json-to-pdf"    element={<JsontoPdf/>}/>
        <Route path="/ApiDocumentation"    element={<ApiDocumentation/>}/>
      </Routes>







      <Footer></Footer>
      
    </div>
  );
}

export default App;
