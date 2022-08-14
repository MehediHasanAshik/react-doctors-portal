import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import footer from '../../../images/footer-bg.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const footerBG = {
    background: `url(${footer})`,
    backgroundPosition: 'center'
}

const Footer = () => {
    return (
        <Container style={footerBG} sx={{py: 5}}>
            <Grid container spacing={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={6} md={6} lg={3}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography>
                            Emergency Dental Care
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                        <Typography>
                            Treatment For Personal Disease
                        </Typography>
                        <Typography>
                            Tooth Extraction
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant='h6' sx={{ fortWeight: 600, color: 'info.main', pb: 3 }}>
                            Services
                        </Typography>
                        <Typography>
                            Emergency Dental Care
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                        <Typography>
                            Treatment For Personal Disease
                        </Typography>
                        <Typography>
                            Tooth Extraction
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                    <Box sx={{ textAlign: 'left'}}>
                        <Typography variant='h6' sx={{ fortWeight: 600, color: 'info.main', pb: 3 }}>
                            Oral Health
                        </Typography>
                        <Typography>
                            Emergency Dental Care
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                        <Typography>
                            Treatment For Personal Disease
                        </Typography>
                        <Typography>
                            Tooth Extraction
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                        <Typography>
                            Check Up
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant='h6' sx={{ fortWeight: 600, color: 'info.main', pb: 3 }}>
                            Our Address
                        </Typography>
                        <Typography>
                            New York - 10101 Hudson Yards
                        </Typography>
                        <Box sx={{ mt: 4, mb: 5 }}>
                            <FacebookIcon sx={{ mr: 3 }} />
                            <GoogleIcon sx={{ mr: 3 }} />
                            <TwitterIcon />
                        </Box>
                        <Box>
                            <Typography>
                                Call Now <br />
                                <span style={{backgroundColor: '#21618C', color: 'white', padding: '6px', borderRadius: '5px'}}>+1232324242</span>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;