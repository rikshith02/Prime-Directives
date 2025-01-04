// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ProductManagement from './Pages/ProductManagement';
import SupplierManagement from './Pages/SupplierManagement';
import Login from './Pages/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="d-flex">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product-management" element={<ProductManagement />} />
              <Route path="/supplier-management" element={<SupplierManagement />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
