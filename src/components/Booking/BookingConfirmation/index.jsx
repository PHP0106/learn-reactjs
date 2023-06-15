import React from 'react';
import './style.css';

const BookingConfirmation = ({ bookingData }) => {
    return (
        <div className="booking-confirmation">
            <h2>Xác nhận đặt phòng</h2>
            <p>
                <strong>Tên khách hàng:</strong> {bookingData.name}
            </p>
            <p>
                <strong>Email:</strong> {bookingData.email}
            </p>
            <p>
                <strong>Loại phòng:</strong> {bookingData.roomType}
            </p>
            <p>
                <strong>Quốc gia:</strong> {bookingData.country}
            </p>
            <p>
                <strong>Ngày đặt phòng:</strong> {bookingData.checkInDate}
            </p>
            <p>
                <strong>Ngày trả phòng:</strong> {bookingData.checkOutDate}
            </p>
            <p>
                <strong>Tổng tiền:</strong> ${bookingData.total}
            </p>
        </div>
    );
};

export default BookingConfirmation;
