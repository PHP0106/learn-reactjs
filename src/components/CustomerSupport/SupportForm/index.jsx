import React from 'react';
import './style.css'

const SupportForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý submit form
    };

    return (
        <div>
            <h2>Gửi yêu cầu hỗ trợ</h2>
            <form onSubmit={handleSubmit}>
                {/* Các trường dữ liệu của form */}
                <button type="submit">Gửi</button>
            </form>
        </div>
    );
};

export default SupportForm;
