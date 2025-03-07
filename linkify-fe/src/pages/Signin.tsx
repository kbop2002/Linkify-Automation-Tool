import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup.tsx";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      setError("All fields are required!");
      setPopupOpen(true);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setPopupOpen(true);
      return;
    }
    navigate("/dashboard"); // Redirect after successful signup
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Card elevation={5} sx={{ p: 4, textAlign: "center", width: "100%" }}>
          <CardContent>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Create an Account
            </Typography>
            <TextField fullWidth label="Email" type="email" variant="outlined" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField fullWidth label="Confirm Password" type="password" variant="outlined" margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSignup}>
              Sign Up
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Already have an account?{" "}
              <Button color="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Popup message={error} open={popupOpen} onClose={() => setPopupOpen(false)} />
    </Container>
  );
};

export default Signup;
