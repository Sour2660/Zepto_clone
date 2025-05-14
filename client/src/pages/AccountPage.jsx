import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AccountPage.css';
import axios from 'axios';

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token && storedUser) {
      const parsedUser = JSON.parse(storedUser);
      axios
        .get(`/api/users/${parsedUser.phone}`)
        .then(res => setUser(res.data))
        .catch(() => setUser({ ...parsedUser, orders: [] }));
    }
  }, []);

  if (!user) return <p className="text-center mt-5">Loading account information...</p>;

  return (
    <Container fluid className="account-container py-4">
      <Row>
        <Col md={3} className="account-sidebar">
          <Card className="text-center p-3 shadow-sm">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile"
              className="profile-image mb-3"
            />
            <h5>{user.name}</h5>
            <p>{user.phone}</p>
            <Button variant="outline-dark" className="mt-2" style={{ borderRadius: '20px' }}>
              Add Balance
            </Button>
          </Card>

          <div className="menu-list mt-4">
            <p className="menu-item">🛒 Orders</p>
            <p className="menu-item">💬 Customer Support</p>
            <p className="menu-item">🎁 Manage Referrals</p>
            <p className="menu-item">🏠 Addresses</p>
            <p className="menu-item">👤 Profile</p>
          </div>
        </Col>

        <Col md={9}>
          <h4 className="mb-4">Settings</h4>
          {user.orders && user.orders.length > 0 ? (
            user.orders.map((order, index) => (
              <Card key={index} className="mb-3 shadow-sm">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    {order.items?.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="item"
                        style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '8px' }}
                      />
                    ))}
                    <div>
                      <h6>Order {order.status}</h6>
                      <p style={{ fontSize: '12px', color: '#555' }}>Placed at {order.date}</p>
                    </div>
                  </div>
                  <div>
                    <p><b>₹{order.amount}</b></p>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No recent orders found.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AccountPage;
