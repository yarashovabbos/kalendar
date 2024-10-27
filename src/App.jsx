import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Calendar } from 'antd';
import { FaClock } from 'react-icons/fa';

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onPanelChange = (value, mode) => {
    toast.info(`Selected date: ${value.format('YYYY-MM-DD')}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Real Time Calendar</h1>
      <div className="d-flex justify-content-center mb-4">
        <FaClock size={40} className="me-2" />
        <h2>{time.toLocaleTimeString()}</h2>
      </div>
      <Calendar onPanelChange={onPanelChange} />
      <ToastContainer />
    </div>
  );
};

export default App;
