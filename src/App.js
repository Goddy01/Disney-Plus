import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import LoginHeader from './components/LoginHeader'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  return location.pathname !== '/login' ? <Header /> : <LoginHeader />;
}

export default App;
