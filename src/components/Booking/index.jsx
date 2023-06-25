import React, { useState } from 'react';
import './style.css';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';

const BookingFeature = () => {
    const [bookingId, setBookingId] = useState(null);

    const handleBookingConfirmation = (id) => {
        setBookingId(id);
    };

    return (
        <div className="booking-container">
            <div className="booking-form-container">
                <h2>Đặt phòng</h2>
                <BookingForm onBookingConfirmation={handleBookingConfirmation} />
            </div>
            {bookingId && (
                <div className="booking-confirmation-container">
                    <h2>Xác nhận đặt phòng</h2>
                    <BookingConfirmation bookingId={bookingId} />
                </div>
            )}
        </div>
    );
};

export default BookingFeature;
