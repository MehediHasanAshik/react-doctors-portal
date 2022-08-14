import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import testBg from '../../../images/testimonoalBG.png'
import patient1 from '../../../images/people-1.png'
import patient2 from '../../../images/people-2.png'
import patient3 from '../../../images/people-3.png'

const testimonialBg = {
    background: `url(${testBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 10px"
}

const Testimonial = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Box style={testimonialBg}>
                <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'left', color: 'info.main', pt: 2, pb: 1}}>
                    Testimonial
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'left', pt: 3, pb: 4 }}>
                    What's Our Patients <br /> Says
                </Typography>
                <Grid container spacing={2}>
                    <Grid sx={{display: 'flex'}} item xs={12} md={6} lg={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse nobis quis. Quia molestiae illo hic suscipit nam similique enim!
                                </Typography>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 2, mt: 3, px: 3}}>
                                    <Typography>
                                        <img src={patient1} alt="" />
                                    </Typography>
                                    <Typography>
                                        Winson Harry <br />
                                        California
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid sx={{display: 'flex'}} item xs={12} md={6} lg={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse nobis quis. Quia molestiae illo hic suscipit nam similique enim!
                                </Typography>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 2, mt: 3, px: 3}}>
                                    <Typography>
                                        <img src={patient2} alt="" />
                                    </Typography>
                                    <Typography>
                                        Lara Croft <br />
                                        New York
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid sx={{display: 'flex'}} item xs={12} md={6} lg={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse nobis quis. Quia molestiae illo hic suscipit nam similique enim!
                                </Typography>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 2, mt: 3, px: 3}}>
                                    <Typography>
                                        <img src={patient3} alt="" />
                                    </Typography>
                                    <Typography>
                                        Lily Carter <br />
                                        Las Vegas
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonial;