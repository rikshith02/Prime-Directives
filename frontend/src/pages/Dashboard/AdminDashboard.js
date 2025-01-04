// src/Pages/Dashboard/AdminDashboard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <div className="content">
      <h1>Admin Dashboard</h1>
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
              50 Users
            </Card.Text>
            <Button variant="primary">Manage Users</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Body>
            <Card.Title>Admin Settings</Card.Title>
            <Card.Text>
              Configure system settings
            </Card.Text>
            <Button variant="primary">Configure</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;
