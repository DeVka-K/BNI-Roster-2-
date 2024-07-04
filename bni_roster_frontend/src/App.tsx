import React from 'react';
// import SignUp from './Pages/signup';
// import LoginPage from './Pages/LoginPage';
import FormToPDF from './Components/FormToPDF';
import { Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <div>
      {/* <SignUp />
    <LoginPage/> */}
    <Routes>
    <Route path="/" element={<HomePage/>}/>

      <Route path="/form-to-pdf" element={<FormToPDF/>}/>
    </Routes>
   
    </div>
  );
}

export default App;


