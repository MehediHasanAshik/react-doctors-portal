import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    
                    <Typography sx={{ px: 3 }}>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }}
                            to='/home'>
                            <Button color="inherit">
                                Home
                            </Button>
                        </NavLink>
                    </Typography>

                    <Typography sx={{ px: 3 }}>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }}
                            to='/appointment'>
                            <Button color="inherit">
                                Appointment
                            </Button>
                        </NavLink>
                    </Typography>

                    <Typography sx={{ px: 3 }}>
                        {user?.email &&
                            <NavLink
                                style={{ textDecoration: 'none', color: 'white' }}
                                to='/dashboard'>
                                <Button
                                    color="inherit">Dashboard
                                </Button>
                            </NavLink>}
                    </Typography>
                    <Typography variant='h7' sx={{ fontWeight: 500 }}>
                        {user.displayName}
                    </Typography>
                    {
                        user?.email ?
                            <Button
                                onClick={logOut}
                                color="inherit">LogOut
                            </Button>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'><Button color="inherit">Login</Button></NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;