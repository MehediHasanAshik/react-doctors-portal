import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png';

const HomePart = () => {
    return (
            <Container sx={{ flexGrow: 1, mt: 3 }}>
                <Grid container spacing={1} sx={{display: 'flex', alignItems: 'center'}}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "50%" }} src={treatment} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant='h5' sx={{ fontWeight: '500' }}>
                                Exceptional Dental <br /> Care, on Your Terms
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem quia, iure reiciendis in libero iste consequatur quisquam nulla? Exercitationem ab quae reiciendis odio officia sed fuga saepe iusto veritatis deleniti! Perspiciatis exercitationem voluptates non corrupti enim optio reiciendis fugit!
                            </Typography>
                            <Typography>
                                <Button sx={{ mt: 4 }} variant='contained'>Learn More</Button>
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
    );
};

export default HomePart;