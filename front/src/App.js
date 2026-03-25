
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import RegisterUser from './pages/registerUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registerUser" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
