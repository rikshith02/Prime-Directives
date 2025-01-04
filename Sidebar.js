// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/product-management">Product Management</Link>
      <Link to="/supplier-management">Supplier Management</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Sidebar;
