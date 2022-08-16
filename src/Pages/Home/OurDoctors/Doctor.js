import { EmailOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, email, image } = doctor;
    return (
        <Grid item xs={12} md={6} lg={4}>
            <img style={{ width: '50%' }} src={`data:image/jpeg;base64,${image}`} alt="" />
            <Typography variant='h6'
                sx={{ fontWeight: 600, py: 1 }}>{name}
            </Typography>

            <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>
                <EmailOutlined /> <span>{email}</span>
            </Typography>

        </Grid>
    );
};

export default Doctor;