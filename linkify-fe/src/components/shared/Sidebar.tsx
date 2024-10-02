import React from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';

const Sidebar: React.FC = () => {
    return (
        <Box
            sx={{
                width: 250,
                bgcolor: 'primary.main',
                color: 'white',
                height: '100vh',
                p: 2,
            }}
        >
            <Typography variant="h6" gutterBottom>
                Menu
            </Typography>
            <List>
                <ListItem button>
                    <ListItemText primary="Products" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Orders" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Alerts" />
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;
