import React, { useState } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ColorFeatue from './components/ColorBox';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import LoginFeature from './components/Login';
import RegisterFeature from './components/Register';
import AccountFeature from './components/Account';
import CustomerSupport from './components/CustomerSupport';
import BookingFeature from './components/Booking';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className='App'>

      Header
      {/* <p><NavLink to='/todos'>Todos</NavLink ></p>
      <p><NavLink to='/color'>ColorBox</NavLink ></p> */}
      <p><NavLink to="/">Đăng nhập</NavLink></p>
      <p><NavLink to="/register">Đăng ký</NavLink></p>
      <p><NavLink to="/account">Quản lý tài khoản</NavLink></p>
      <p><NavLink to="/customerSupport">Hỗ trợ khách hàng</NavLink></p>
      <p><NavLink to="/booking">Đặt phòng</NavLink></p>


      {/* <p><NavLink to='/'>Home</NavLink></p> */}

      <Routes>
        {/* <Route path="/home" element={<Navigate replace to="/" />} /> */}
        {/* <Route path="/post-list/:postId" element={<Navigate to="/posts/:postId" />} /> */}
        {/* <Route path='/todos' element={<ListPage />} /> */}
        {/* <Route path='/todos/*' element={<TodoFeature />} /> */}
        {/* <Route path='/todos1' element={<DetailPage />} /> */}
        {/* <Route path='/color' element={<ColorFeatue />} /> */}
        {/* <Route path='/' element={<CounterFeature />} /> */}
        <Route path='/' element={<LoginFeature setLoggedIn={setLoggedIn} />} />
        <Route path='/register' element={<RegisterFeature />} />
        <Route path='/account' element={<AccountFeature isLoggedIn={isLoggedIn} />} />
        <Route path='/customerSupport' element={<CustomerSupport />} />
        <Route path='/booking' element={<BookingFeature />} />
      </Routes>

    </div>

  );
}

export default App;
