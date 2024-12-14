import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import RickRoll from './components/RickRoll';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/my-portfolio/" element={<RickRoll />} />
        <Route path="/my-portfolio/rr" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);