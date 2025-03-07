import React from "react";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const SupplierCenter: React.FC = () => {
    const navigate = useNavigate()
  return (
    <>
    <Container>
      <Typography variant="h4" gutterBottom>
        Supplier Center
      </Typography>
      <Typography>Manage your suppliers, orders, and fulfillment settings.</Typography>
    </Container>
    <button onClick={()=>navigate('/dashboard')}>Home</button>
    </>
  );
};


export default SupplierCenter;
