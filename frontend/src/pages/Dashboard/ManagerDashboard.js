// src/Pages/Dashboard/ManagerDashboard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ManagerDashboard = () => {
  return (
    <div className="content">
      <h1>Manager Dashboard</h1>
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
        <Card className="card">
          <Card.Body>
            <Card.Title>Manage Users</Card.Title>
            <Card.Text>
              25 Users
            </Card.Text>
            <Button variant="primary">Manage Users</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ManagerDashboard;
