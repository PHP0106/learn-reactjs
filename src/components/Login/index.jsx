import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; // Import file CSS cho tệp Login

const LoginFeature = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.success) {
        setLoggedIn(true);
      } else {
        alert('Đăng nhập không thành công');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginFeature;
