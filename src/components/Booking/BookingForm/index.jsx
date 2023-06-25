import React, { useState } from 'react';
import './style.css';
import bookingApi from '../../../api/bookingApi';

const BookingForm = ({ onBookingConfirmation }) => {
    const [customerName, setCustomerName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [roomType, setRoomType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedRoomType, setSelectedRoomType] = useState('');
    const [roomPrice, setRoomPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const roomTypes = [
        { type: 'Tiêu chuẩn', price: 100 },
        { type: 'Deluxe', price: 150 },
        { type: 'Hạng sang', price: 200 },
    ];

    const handleRoomTypeChange = (event) => {
        const { value } = event.target;
        setSelectedRoomType(value);

        const selectedRoom = roomTypes.find((room) => room.type === value);
        if (selectedRoom) {
            setRoomPrice(selectedRoom.price);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (startDate && endDate && new Date(endDate) <= new Date(startDate)) {
            setErrorMessage('Ngày kết thúc phải lớn hơn ngày bắt đầu');
            return;
        }

        const today = new Date();
        if (startDate && new Date(startDate) <= today) {
            setErrorMessage('Ngày bắt đầu phải lớn hơn ngày hiện tại');
            return;
        }

        const bookingData = {
            customerName,
            email,
            country,
            roomType,
            roomPrice,
            startDate,
            endDate,
        };

        bookingApi
            .createBooking(bookingData)
            .then((response) => {
                console.log(response);
                const bookingId = response.id;
                onBookingConfirmation(bookingId);
            })
            .catch((error) => {
                console.error('Error creating booking:', error);
            });
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="customerName">Họ và tên:</label>
                <input
                    type="text"
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="country">Quốc gia:</label>
                <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="roomType">Loại phòng:</label>
                <select
                    id="roomType"
                    value={roomType}
                    onChange={(e) => {
                        setRoomType(e.target.value);
                        handleRoomTypeChange(e);
                    }}
                >
                    <option value="">Chọn loại phòng</option>
                    {roomTypes.map((room) => (
                        <option key={room.type} value={room.type}>
                            {room.type} - {room.price} VNĐ
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="startDate">Ngày đặt:</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="endDate">Ngày trả phòng:</label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            {errorMessage && <p style={{ color: 'red' }} className="error-message">{errorMessage}</p>}
            <button type="submit">Đặt phòng</button>
        </form>
    );
};

export default BookingForm;
