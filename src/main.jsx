import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Your main application component
import RickRoll from './components/RickRoll'; // Adjust path as needed
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Using HashRouter instead of BrowserRouter */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rr" element={<RickRoll />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
