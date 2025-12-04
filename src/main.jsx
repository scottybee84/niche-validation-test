import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AgentOS from './niches/agentos/Landing';
import LawyerContent from './niches/lawyercontent/Landing';
import ClinicGrow from './niches/clinicgrow/Landing';
import DealerBoost from './niches/dealerboost/Landing';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/agentos" replace />} />
        <Route path="/agentos" element={<AgentOS />} />
        <Route path="/lawyercontent" element={<LawyerContent />} />
        <Route path="/clinicgrow" element={<ClinicGrow />} />
        <Route path="/dealerboost" element={<DealerBoost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


