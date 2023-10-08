import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://127.0.0.1:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor Added Successfully');
                }
            })

    }

    return (
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    required
                    onChange={e => setName(e.target.value)}
                    label='Doctor Name'
                    variant='standard'
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    onChange={e => setEmail(e.target.value)}
                    required
                    label='Email'
                    variant='standard'
                />
                <br />
                <Input
                    sx={{ width: '50%', my: 2 }}
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button sx={{ width: '25%', my: 2 }} size='small' variant="contained" type='submit'>
                    Add Doctor
                </Button>
                <br />
                {
                    success && <p style={{ color: 'green' }}>{success}</p>
                }
            </form>
        </div>
    );
};

export default AddDoctor;