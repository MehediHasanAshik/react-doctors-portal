import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: "flex",
    alignItems: 'center',
    height: 400

}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h4' sx={{fontWeight: 500}}>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 4, fontSize: 14, fontWeight: 400, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad necessitatibus ut eum corporis magni corrupti magnam nihil commodi a.
                        </Typography>
                        <Button variant='contained'>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;