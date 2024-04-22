import React, { useState } from 'react';
import TeacherInfo from './../components/DashBoard/teacherInfo';
import Footer from './../components/header_footer/Footer';
import SubjectSchedule from './../components/DashBoard/subjectSchedule';
import LessonPlan from './../components/DashBoard/lessonPlan';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './StudentDashboard.css';

function DataTable() {
  const [currentView, setCurrentView] = useState('TeacherInfo');

  const handleNavigation = (viewName) => {
    setCurrentView(viewName);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="student-dashboard">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img className="logo" src="https://i.ibb.co/CMwkBmw/lSgDz8N.png" alt="logo" />
        </a>
        <ul className="navbar-nav ms-auto">
          <li style={{padding: '2vh'}}>
            <a className="nav-link" href="#">Nguyen Van A - GVxxxxx</a>
          </li>
          <li style={{padding: '2vh'}}>
            <i className="fa fa-solid fa-bell fa-lg fa-3x"></i>
            Logout
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 leftBody">
            <ul className="nav flex-column">
              <li className="nav-item" style={{padding: '0', marginTop: '2rem', cursor: 'pointer' }}>
                <a href='/' className='left_navbar'>
                    <i className="fas fa-solid fa-home fa-md fa-2x"></i> Home
                </a>
              </li>
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer' }}>
                <a onClick={() => handleNavigation('TeacherInfo')}>
                    <i class="fa-regular fa-address-book fa-2x"></i> Personal
                </a>
              </li>
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer'}}>
                <a onClick={() => handleNavigation('SubjectSchedule')}>
                    <i class="fa-brands fa-blackberry fa-2x"></i> DashBoard
                </a>
              </li>
              <li className="nav-item" style={{ marginTop: '2rem', cursor: 'pointer' }}>
                <a onClick={() => handleNavigation('LessonPlan')}>
                    <i className="fa fa-solid fa-question fa-md fa-2x"></i> Lesson Plan
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-10 rightBody">
            <div className="dataTable mx-auto">
              {currentView === 'TeacherInfo' && <TeacherInfo />}
              {currentView === 'SubjectSchedule' && <SubjectSchedule />}
              {currentView === 'LessonPlan' && <LessonPlan/>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DataTable;
