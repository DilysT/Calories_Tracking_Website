import React from 'react';
import Header from './components/dashboard/Header';
import SideBar from './components/dashboard/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <SideBar />
      <div className="main-content">
        <Header />
        <Dashboard />
        
      </div>
    </div>
  );
};

export default App;
