"use client"
import { Inter } from 'next/font/google'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '@/components/app.sidebar';


const inter = Inter({ subsets: ['latin'] })

const contentStyle = {
  display: 'flex',
};

const sidebarStyle = {
  flex: '0 0 250px', // Điều này sẽ đặt chiều rộng cố định của thanh sidebar
};

const mainContentStyle = {
  flex: '1', // Điều này sẽ làm cho nội dung bên phải mở rộng để lấp đầy không gian còn lại
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Router>
            <div style={contentStyle}>
              <div style={sidebarStyle}>
                <Sidebar />
              </div>
              <div style={mainContentStyle}>
                {children}
              </div>
            </div>
          </Router>
        </body>
    </html>
  )
}
