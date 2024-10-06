import React from 'react';
import '../../styles/Header.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className="header">
      <div className="hamburger-container">
        <div className="hamburger" />
        <div className="header-title">Dashboard</div>
      </div>
   
    </div>
  );
};

export default Header;
