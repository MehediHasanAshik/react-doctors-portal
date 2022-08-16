import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51LWwi2FFfeqU3bTcD1j1CCA1zhdSbiuThpxgoNc0YUASo4CdAljQVRAzOM0GgJY2bMrNdl0uRj8FH6CAnVM0LJW500knFDjwwH');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`https://intense-sands-21625.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])

    return (
        <Container>
            <Grid item lg={12}>
                <Typography sx={{ textAlign: 'center' }}>
                    <h3>Pay For: {appointment?.patientName}</h3>
                    <h4>Service Name: {appointment?.serviceName}</h4>
                    <h4>Pay: ${appointment?.price}</h4>
                    <h4>Time: {appointment?.time}</h4>
                    <h4>Date: {appointment?.date}</h4>
                </Typography>

                {appointment?.price &&
                    <Elements stripe={stripePromise}>
                        <CheckOutForm appointment={appointment} />
                    </Elements>}
            </Grid>
        </Container>
    );
};

export default Payment;