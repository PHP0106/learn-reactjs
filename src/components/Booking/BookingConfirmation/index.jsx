import React, { useState, useEffect } from 'react';
import './style.css';
import bookingApi from '../../../api/bookingApi';

const BookingConfirmation = ({ bookingId }) => {
    const [booking, setBooking] = useState(null);
    console.log(bookingId)

    useEffect(() => {
        bookingApi.getBooking(bookingId)
            .then((response) => {
                const bookingData = response;
                setBooking(bookingData);
            })
            .catch((error) => {
                console.error('Error retrieving booking:', error);
            });
    }, [bookingId]);

    if (!booking) {
        return <div>Loading...</div>;
    }

    return (
        <div className="booking-confirmation">
            <p>Mã đặt phòng: {booking.id}</p>
            <p>Họ và tên: {booking.customerName}</p>
            <p>Email: {booking.email}</p>
            <p>Quốc gia: {booking.country}</p>
            <p>Loại phòng: {booking.roomType}</p>
            <p>Giá phòng: {booking.roomPrice}</p>
            <p>Ngày đặt: {booking.startDate}</p>
            <p>Ngày trả phòng: {booking.endDate}</p>
            <p>Tông tiền: {booking.totalAmount}</p>
        </div>
    );
};

export default BookingConfirmation;
