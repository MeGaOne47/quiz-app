"use client"
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CapNhatThongTin = () => {
  const [userInfo, setUserInfo] = useState({
    username: 'example@example.com',
    fullName: 'John Doe',
    gender: 'Male',
    birthday: '2000-01-01',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated user information to the server here
    console.log('Updated data:', userInfo);
  };

  const formStyle = {
    backgroundColor: '#fff', // White background
    padding: '20px',
    border: `2px solid rgb(38, 167, 189)`, // Accent color border
    borderRadius: '10px',
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    minHeight: '100vh', // Ensure full height
  };

  return (
    <div style={contentStyle}>
      <div style={formStyle}>
        <Container>
          <h2 className="my-4">Cập Nhật Thông Tin Tài Khoản</h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="username">
                  <Form.Label>Địa chỉ email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="username"
                    value={userInfo.username}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="fullName">
                  <Form.Label>Họ tên:</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={userInfo.fullName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="gender">
                  <Form.Label>Giới tính:</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={userInfo.gender}
                    onChange={handleInputChange}
                  >
                    <option value="Male">Nam</option>
                    <option value="Female">Nữ</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="birthday">
                  <Form.Label>Ngày sinh:</Form.Label>
                  <Form.Control
                    type="date"
                    name="birthday"
                    value={userInfo.birthday}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Cập nhật
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default CapNhatThongTin;

