"use client"
// components/Statistics.tsx
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu thống kê từ server và cập nhật state 'data'
    // Đoạn này bạn cần cập nhật để thực hiện gửi request đúng đến API của bạn.
    // Ví dụ: fetch('/api/statistics')...
  }, []);

  return (
    <div>
      <div>
        <h1>Thống kê</h1>
        <p>Thông tin chi tiết về các đề thi và kết quả của người dùng.</p>
      </div>

      <Table striped bordered hover>
    <thead>
      <tr>
        <th>Đề thi</th>
        <th>Số người làm</th>
        <th>Điểm trung bình</th>
        <th>Điểm cao nhất</th>
      </tr>
    </thead>
    {/* <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.examName}</td>
          <td>{item.totalParticipants}</td>
          <td>{item.averageScore}</td>
          <td>{item.highestScore}</td>
        </tr>
      ))}
    </tbody> */}
  </Table>

    </div>
  );
};

export default Statistics;


