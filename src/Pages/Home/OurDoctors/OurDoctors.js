import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Doctor from './Doctor';

const OurDoctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://intense-sands-21625.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'info.main', pb: 4 }}>
                Our Doctors
            </Typography>
            <Grid container spacing={1}>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor} />)
                }
            </Grid>
        </Container>
    );
};

export default OurDoctors;