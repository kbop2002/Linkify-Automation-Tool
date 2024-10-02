import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your authentication logic here
        console.log('Login submitted:', { email, password });
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 10, p: 3, borderRadius: 2, boxShadow: 2, backgroundColor: 'white' }}>
                <Typography variant="h4" component="h1" align="center">
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        Log In
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
