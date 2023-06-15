import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; // Import file CSS cho tệp Register

const RegisterFeature = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { username, password });
      if (response.data.success) {
        alert('Đăng ký thành công');
      } else {
        alert('Đăng ký không thành công');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default RegisterFeature;
