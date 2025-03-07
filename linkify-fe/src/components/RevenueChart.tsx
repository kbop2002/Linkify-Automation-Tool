import React from "react";
import { Bar } from "react-chartjs-2";
import { Paper, Typography, Box } from "@mui/material";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart: React.FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "YTD Revenue ($)",
        data: [5000, 10000, 12000, 15000, 20000, 25000, 28000, 32000, 35000, 40000, 42000, 45000],
        backgroundColor: "rgba(33, 150, 243, 0.8)",
      },
    ],
  };

  return (
    <Paper sx={{ padding: 2, textAlign: "center", height: "20vh" }}>
      <Typography variant="h6">Year-to-Date Revenue</Typography>
      <Box sx={{ height: "20vh" }}>
        <Bar data={data} />
      </Box>
    </Paper>
  );
};

export default RevenueChart;
