import { Alert, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 30,
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 25,
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 35,
        space: 4
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        price: 20,
        space: 5
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 AM - 07.00 AM',
        price: 32,
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00 AM',
        price: 22,
        space: 10
    },
]

const AvailableAppointments = ({ date }) => {

    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            {bookingSuccess && <Alert severity="info">Appointment Booking Successful</Alert>}
            <Typography
                variant='h5'
                sx={{ color: 'info.main', fontWeight: 500, mt: 4, mb: 2 }}>
                Available Appointments {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess} />
                    )
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;