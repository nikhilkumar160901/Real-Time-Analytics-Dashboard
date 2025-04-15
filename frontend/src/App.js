import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import './App.css';

const socket = io('http://localhost:4000');

function App() {
  const [data, setData] = useState([]);
  const [activeUsers, setActiveUsers] = useState(0);
  const [avgSession, setAvgSession] = useState(0);

  useEffect(() => {
    socket.on('trafficData', (newData) => {
      setData(prev => [...prev.slice(-9), newData]);
      setActiveUsers(newData.active_users);
      setAvgSession(newData.avg_session_duration);
    });
    return () => socket.off('trafficData');
  }, []);

  return (
    <div className="App">
      <h2>📊 Real-Time Website Traffic Dashboard</h2>
      <div className="cards">
        <div className="card">
          <h3>👥 Active Users</h3>
          <p>{activeUsers}</p>
        </div>
        <div className="card">
          <h3>⏱️ Avg Session Duration (mins)</h3>
          <div className="progress">
            <div className="progress-bar" style={{ width: `${(avgSession / 6) * 100}%` }}>
              {avgSession}
            </div>
          </div>
        </div>
      </div>

      <div className="chart">
        <h3>📈 Page Views Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" tick={{ fontSize: 10 }} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="page_views" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;