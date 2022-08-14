import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 500 }} variant='h6'>
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 500 }} variant='h7'>
                        {time}
                    </Typography>
                    <Typography variant='caption' display='block'>
                        {space} Spaces Available
                    </Typography>
                    <Button onClick={handleOpen} sx={{ mt: 1 }} variant='contained'>Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                handleClose={handleClose}
                setBookingSuccess={setBookingSuccess}
                open={open} />
        </>
    );
};

export default Booking;