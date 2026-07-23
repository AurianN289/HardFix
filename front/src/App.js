
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import RegisterUser from './pages/registerUser';
import Home from './pages/home';
import QuestionDetail from './pages/questionDetail';
import RegisterQuestion from './pages/registerQuestion';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questionDetail/:id" element={<QuestionDetail />} />
        <Route path="/registerQuestion" element={<RegisterQuestion />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
