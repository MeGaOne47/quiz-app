"use client"
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import "@/styles/app.css";
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="rgb(38 167 189)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a  href="/" className="text-decoration-none" style={{ color: 'inherit'}}>
            QuizApp
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <div className='CDBSidebarMenuItem'>
            <Link href={"/QuanLyTracNghiem"}>
              <CDBSidebarMenuItem className='CDBSidebarMenuItem'  icon="fa fa-tasks">Quản Lý Đề Thi</CDBSidebarMenuItem>
            </Link>
            </div>

            <div className='CDBSidebarMenuItem'>
            <Link href={"/Thi"}>
              <CDBSidebarMenuItem className='CDBSidebarMenuItem' icon="fa fa-graduation-cap">Thi</CDBSidebarMenuItem>
            </Link>
            </div>

            <div className='CDBSidebarMenuItem'>
            <Link href={"/NguoiDung"}>
              <CDBSidebarMenuItem className='CDBSidebarMenuItem' icon="fa fa-user">Người Dùng</CDBSidebarMenuItem>
            </Link>
            </div>

            <div className='CDBSidebarMenuItem'>
            <Link href={"/ThongKe"}>
              <CDBSidebarMenuItem className='CDBSidebarMenuItem' icon="fa fa-chart-line">Thống Kê</CDBSidebarMenuItem>
            </Link>
            </div>
            

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Hùng Daddy
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;