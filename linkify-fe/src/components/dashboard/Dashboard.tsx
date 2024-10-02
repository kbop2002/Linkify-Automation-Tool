import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ProductList from './ProfuctList.tsx';
import Sidebar from '../shared/Sidebar.tsx';

const Dashboard: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <Grid container spacing={2} sx={{ flexGrow: 1, padding: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ProductList />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
