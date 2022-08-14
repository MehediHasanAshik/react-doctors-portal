import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointBG from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

const appointmentBG = {
    background: `url(${appointBG})`,
    marginTop: '100px',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={appointmentBG} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-110px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left' }}>
                        <Box sx={{p: 2}}>
                            <Typography variant='h5' style={{ color: '#0099ff' }}>
                                Appointment
                            </Typography>
                            <Typography variant='h4' sx={{ color: 'common.white', my: 3, }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant='h7' sx={{ color: 'common.white' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae praesentium totam id vitae sed nam dolor ducimus qui possimus?
                            </Typography>
                            <Typography>
                                <Button sx={{ mt: 4 }} variant='contained'>Learn More</Button>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;