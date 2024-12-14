import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import RickRoll from './components/RickRoll';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<RickRoll />} />
        <Route path="/rr" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);