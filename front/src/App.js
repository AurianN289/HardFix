
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import RegisterUser from './pages/registerUser';
import Home from './pages/home';

import Teste from './pages/teste';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/home" element={<Home />} />
        

        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
