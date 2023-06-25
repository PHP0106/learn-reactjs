import axiosClient from './axiosClient'

const bookingApi = {
    getAll(params) {
        const url = '/bookings';
        return axiosClient.get(url, { params });
    },

    getBooking(id) {
        const url = `/bookings/bookingOrderId?id=${id}`;
        return axiosClient.get(url);
    },

    createBooking(data) {
        const url = '/bookings/createBookingOrder';
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }

};

export default bookingApi;