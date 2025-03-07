import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


interface NavbarProps{
    backgroundColor : string;
    color : string;
}
const Navbar: React.FC<NavbarProps> = ({backgroundColor, color}) => {
    const navigate = useNavigate();
    return (
        <AppBar position="static" sx={{backgroundColor:backgroundColor, color: color}}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 , marginLeft:'10vw', fontWeight:'bold'}}>
                    Linkify
                </Typography>
                <Button color="inherit" onClick={() => {navigate('/login')}}>Login</Button>
                <Button color="inherit" onClick={()=> navigate('signup')}>Register</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
