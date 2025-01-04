// src/Pages/Dashboard/StaffDashboard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const StaffDashboard = () => {
  return (
    <div className="content">
      <h1>Staff Dashboard</h1>
      <div className="card-container">
        <Card className="card">
          <Card.Body>
            <Card.Title>Total Products</Card.Title>
            <Card.Text>
              120
            </Card.Text>
            <Button variant="primary">View Products</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default StaffDashboard;
