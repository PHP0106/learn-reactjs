import React, { useState } from 'react';
import ChatWidget from './ChatWidget'
import SupportForm from './SupportForm';
import './style.css'

const CustomerSupport = () => {
    const [isChatOpen, setChatOpen] = useState(false);
    const [isFormOpen, setFormOpen] = useState(false);

    const openChat = () => {
        setChatOpen(true);
        setFormOpen(false);
    };

    const openForm = () => {
        setChatOpen(false);
        setFormOpen(true);
    };

    return (
        <div>
            <h1>Hỗ trợ khách hàng</h1>
            <button onClick={openChat}>Chat</button>
            <button onClick={openForm}>Gửi yêu cầu</button>
            {isChatOpen && <ChatWidget />}
            {isFormOpen && <SupportForm />}
        </div>
    );
};

export default CustomerSupport;
