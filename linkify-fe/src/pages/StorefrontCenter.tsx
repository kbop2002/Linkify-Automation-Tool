import React from "react";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const StorefrontCenter: React.FC = () => {
    const navigate = useNavigate()
  return (
    <>
    <Container>
      <Typography variant="h4" gutterBottom>
        Storefront Center
      </Typography>
      <Typography>View and manage your storefront settings and linked e-commerce stores.</Typography>
    </Container>
    <button onClick={()=>navigate('/dashboard')}>Home</button>

    </>
  );
};

export default StorefrontCenter;
