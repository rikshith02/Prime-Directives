// src/Pages/Dashboard.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="content">
      <h1>Dashboard</h1>
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
            <Card.Title>Name</Card.Title>
            <Card.Text>
              120
            </Card.Text>
            <Button variant="primary">View Users</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Body>
            <Card.Title>StockLevel</Card.Title>
            <Card.Text>
              5 Products
            </Card.Text>
            <Button variant="primary">Restock</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Body>
            <Card.Title>reorderPoint</Card.Title>
            <Card.Text>
              120
            </Card.Text>
            <Button variant="primary">View Products</Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Body>
            <Card.Title>Category</Card.Title>
            <Card.Text>
              3 Orders
            </Card.Text>
            <Button variant="primary">View Orders</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
