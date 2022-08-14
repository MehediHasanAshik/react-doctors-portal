import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch('https://intense-sands-21625.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            });


        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    type='email'
                    id="standard-basic"
                    label="Email"
                    onBlur={handleOnBlur}
                    sx={{ width: '60%', my: 2 }}
                    variant="standard" />
                <br />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            <br />
            {success && <Alert severity="info">Successfully Added as an Admin</Alert>}
        </div>
    );
};

export default MakeAdmin;