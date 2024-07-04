import React from 'react';
// import SignUp from './Pages/signup';
// import LoginPage from './Pages/LoginPage';
import FormToPDF from './Components/FormToPDF';
import { Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

import CsvToPdf from './Components/CsvtoPdf';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import JsontoPdf from './Components/JsontoPdf';
import ExcelToPDF from './Components/ExcelToPDF';


const App: React.FC = () => {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
      <Route path="/excel-to-pdf" element={<ExcelToPDF/>}/>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/json-to-pdf"    element={<JsontoPdf/>}/>
      <Route path="/csv-to-pdf" element={<CsvToPdf/>}/>
      <Route path="/form-to-pdf" element={<FormToPDF/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;


