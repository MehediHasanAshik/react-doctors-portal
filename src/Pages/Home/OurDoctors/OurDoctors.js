import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor-small.png';
import PhoneIcon from '@mui/icons-material/Phone';

const OurDoctors = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'info.main', pb: 4 }}>
                Our Doctors
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                    <img width={'50%'} src={doctor} alt="" />
                    <Typography variant='h6' sx={{ fontWeight: 600, py: 1 }}>Dr. Claudi</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>
                        <PhoneIcon/> +1(408) 324-3344
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <img width={'50%'} src={doctor} alt="" />
                    <Typography variant='h6' sx={{ fontWeight: 600, py: 1 }}>Dr. Peddro</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>
                         <PhoneIcon/> +1(408) 324-3344
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <img width={'50%'} src={doctor} alt="" />
                    <Typography variant='h6' sx={{ fontWeight: 600, py: 1 }}>Dr. Noman</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>
                        <PhoneIcon/> +1(408) 324-3344
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurDoctors;