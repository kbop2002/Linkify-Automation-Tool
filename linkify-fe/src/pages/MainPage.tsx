import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar.tsx";
import RevenueChart from "../components/RevenueChart.tsx";
import Dashboard from "../components/dashboard/Dashboard.tsx";
import { Route, Routes } from "react-router-dom";
import Margins from "../components/Margins.tsx";
import OverHead from "../components/Overhead.tsx";
import Overview from "../components/Overview.tsx";
import Revenue from "../components/Revenue.tsx";
import Profit from "../components/Profits.tsx";
import MRevenueChart from "../components/MRevenueChart.tsx";

const MainPage: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Top Navigation Bar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          color:'black',
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "8px 16px",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hello <b>John Smith</b>
          </Typography>
          <Button color="inherit" href="/settings">
            Settings
          </Button>
          <Button color="inherit" href="/">
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Layout: Sidebar + Revenue Chart + Dashboard */}
      <Grid container sx={{ flexGrow: 1, padding: 3 }}>
        {/* Sidebar Section */}
        <Grid item xs={2}>
          <Sidebar />
        </Grid>

        {/* Revenue Chart Widget */}
        <Grid item xs={3} sx={{ padding: 2,  }}>
          <RevenueChart />
          <MRevenueChart/>
        </Grid>

        {/* Dashboard Section */}
        <Grid item xs={7}>
          {/*<Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/margin" element={<Margins/>}/>
            <Route path="/overhead"element={<OverHead/>}/>
            <Route path="/profit"element={<Profit/>}/>
            <Route path="revenue"element={<Revenue/>}/>
            <Route path="extra" element={<Overview/>}/>
          </Routes>
          */}
          <Dashboard/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
