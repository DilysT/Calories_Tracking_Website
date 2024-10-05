import React from 'react';
import { Layout, Menu, Avatar, Progress, Card, Row, Col } from 'antd';
import { PieChartOutlined, SettingOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../../styles/Dashboard.css'; // Import your styles here

const { Sider, Header, Content } = Layout;

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="energy-summary">
        <div className="energy-item">
          <Progress type="dashboard" percent={75} strokeColor="#5E5CE6" format={() => '938 Kcal'} />
          <p>Calorie consumed</p>
        </div>
        <div className="energy-item">
          <Progress type="dashboard" percent={65} strokeColor="#5E5CE6" format={() => '1223 Kcal'} />
          <p>Calorie remaining</p>
        </div>
      </div>
      <div className="macro-targets">
        <div className="macro-item">
          <Progress type="circle" percent={75} strokeColor="#5E5CE6" format={() => '345/453 (g)'} />
          <p>Protein</p>
        </div>
        <div className="macro-item">
          <Progress type="circle" percent={75} strokeColor="#5E5CE6" format={() => '345/453 (g)'} />
          <p>Net Carb</p>
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
