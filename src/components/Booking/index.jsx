import React, { useState } from 'react';
import './style.css';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';

const BookingFeature = () => {
    const [bookingData, setBookingData] = useState(null);

    const handleBookingConfirmation = (data) => {
        setBookingData(data);
    };

    return (
        <div className="booking-feature">
            <h1>Đặt phòng khách sạn</h1>
            {!bookingData ? (
                <BookingForm onBookingConfirmation={handleBookingConfirmation} />
            ) : (
                <BookingConfirmation bookingData={bookingData} />
            )}
        </div>
    );
};

export default BookingFeature;
