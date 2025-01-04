// src/Pages/Dashboard/StaffDashboard.js
import React from 'react';
import CardComponent from '../../components/Dashboard/CardComponent';

const StaffDashboard = () => {
  return (
    <div className="content">
      <h1>Staff Dashboard</h1>
      <div className="card-container">
        <CardComponent title="Total Products" text="120" buttonText="View Products" buttonLink="/products" />
      </div>
    </div>
  );
}

export default StaffDashboard;
