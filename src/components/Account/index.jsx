import React from 'react';
import './style.css'; // Import file CSS cho tệp Account

const AccountFeature = ({ isLoggedIn, setLoggedIn }) => {
    const handleLogout = () => {
        setLoggedIn(false);
    };

    if (!isLoggedIn) {
        return <h2>Vui lòng đăng nhập để truy cập tài khoản</h2>;
    }

    return (
        <div>
            <h2>Tài khoản của bạn</h2>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
};

export default AccountFeature;