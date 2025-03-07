import React from "react";
import { Bar } from "react-chartjs-2";
import { Paper, Typography, Box } from "@mui/material";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MRevenueChart: React.FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Revenue ($)",
        data: [5000, 5000, 2000, 3000, 5000, 5000, 3000, 4000, 3000, 5000, 2000, 3000],
        backgroundColor: "rgba(33, 150, 243, 0.8)",
      },
    ],
  };

  return (
    <Paper sx={{ padding: 2, textAlign: "center", height: "20vh" , marginTop: '20px'}}>
      <Typography variant="h6">Monthly Revenue</Typography>
      <Box sx={{ height: "20vh" }}>
        <Bar data={data} />
      </Box>
    </Paper>
  );
};

export default MRevenueChart;
