import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import ProductList from "./ProductList.tsx";

interface Theme {
  primary: string;
  secondary: string;
  tertiary: string;
  specialColors1: string;
  specialColors2: string;
  text1: string;
  text2: string;
}

interface DashboardProps {
  theme?: Theme;
}

const Dashboard: React.FC<DashboardProps> = ({ theme }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={2}>
        {/* Product List Section */}
        <Grid item xs={12}>
          <ProductList />
        </Grid>

        {/* Suggested Tips Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Sales Improvement Tips</Typography>
            <Typography variant="body2">✅ Optimize product listings.</Typography>
            <Typography variant="body2">✅ Use AI-powered price adjustments.</Typography>
            <Typography variant="body2">✅ Leverage seasonal promotions.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
