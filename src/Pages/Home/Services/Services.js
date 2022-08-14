import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'


const services = [
    {
        name: "Fluoride Treatment",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi totam non incidunt cupiditate porro, nobis consequuntur in nisi maxime! Recusandae fugit id praesentium beatae ex, iure aperiam maiores. Quis',
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi totam non incidunt cupiditate porro, nobis consequuntur in nisi maxime! Recusandae fugit id praesentium beatae ex, iure aperiam maiores. Quis',
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error commodi totam non incidunt cupiditate porro, nobis consequuntur in nisi maxime! Recusandae fugit id praesentium beatae ex, iure aperiam maiores. Quis',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2, color: 'info.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 'bold', m: 4 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;