import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import BG from '../../../images/bg.png'

const backBG = {
    background: `url(${BG})`,
    backgroundPosition: 'center',
    backgroundColor: 'gray',
    backgroundBlendMode: 'darken luminosity'
}

const ContactUs = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Box style={backBG} sx={{ flexGrow: 1, py: 3 }}>
                <Typography variant='h6' sx={{ fontWeight: 600, color: 'info.main' }}>
                    Contact Us
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 500 }}>
                    Always Connect With Us
                </Typography>
                <Box>
                    <form>
                        <TextField
                            sx={{ width: '80%', my: 2 }}
                            id="outlined-size-small"
                            placeholder="Email Address*"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '80%' }}
                            id="outlined-size-small"
                            placeholder="Subject*"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '80%', my: 2 }}
                            id="outlined-multiline-static"
                            multiline
                            placeholder="Your Messages*"
                        />
                        <br />
                        <Button variant='contained'>SUBMIT</Button>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default ContactUs;