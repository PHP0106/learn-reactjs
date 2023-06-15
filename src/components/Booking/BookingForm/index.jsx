import React, { useState } from 'react';
import './style.css';

const BookingForm = ({ onBookingConfirmation }) => {
    const roomOptions = [
        { type: 'Phòng đơn', price: 100 },
        { type: 'Phòng đôi', price: 150 },
        { type: 'Phòng gia đình', price: 200 },
    ];

    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        roomType: '',
        country: '',
        price: 0,
        total: 0,
        checkInDate: '',
        checkOutDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRoomTypeChange = (e) => {
        const selectedRoomType = e.target.value;
        const selectedRoom = roomOptions.find((room) => room.type === selectedRoomType);

        setBookingData((prevData) => ({
            ...prevData,
            roomType: selectedRoomType,
            price: selectedRoom.price,
        }));
    };

    const calculateTotal = () => {
        const { price, checkInDate, checkOutDate } = bookingData;
        const hours = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60));
        const total = price * hours;
        setBookingData((prevData) => ({
            ...prevData,
            total,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateTotal();
        onBookingConfirmation(bookingData);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="name">Tên khách hàng:</label>
                <input type="text" id="name" name="name" value={bookingData.name} onChange={handleChange} required />
            </div>

            <div className="form-row">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={bookingData.email} onChange={handleChange} required />
            </div>

            <div className="form-row">
                <label htmlFor="roomType">Loại phòng:</label>
                <select style={{ height: '30px' }} id="roomType" name="roomType" value={bookingData.roomType} onChange={handleRoomTypeChange} required>
                    <option value="">-- Chọn loại phòng --</option>
                    {roomOptions.map((room) => (
                        <option key={room.type} value={room.type}>
                            {room.type} - ${room.price}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-row">
                <label htmlFor="country">Quốc gia:</label>
                <input type="text" id="country" name="country" value={bookingData.country} onChange={handleChange} required />
            </div>

            <div className="form-row">
                <label htmlFor="checkInDate">Ngày đặt phòng:</label>
                <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={bookingData.checkInDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-row">
                <label htmlFor="checkOutDate">Ngày trả phòng:</label>
                <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={bookingData.checkOutDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-row">
                <button type="submit">Đặt phòng</button>
            </div>
        </form>
    );
};

export default BookingForm;
