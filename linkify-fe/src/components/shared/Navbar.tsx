import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Linkify
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Register</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
