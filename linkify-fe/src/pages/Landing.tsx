import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent, Box } from "@mui/material";
import Navbar from "../components/shared/Navbar.tsx";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* Navbar */}
      <Navbar backgroundColor="#212121" color="white" />

      {/* Hero Section */}
      <Box 
        sx={{
          backgroundImage: "url('/assets/hero-bg.jpg')", // Add a relevant background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold">
            Automate Your Dropshipping Business with Linkify
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
            The easiest way to manage orders, track stock, and automate fulfillment.
          </Typography>
          <Button variant="contained" onClick={()=>navigate('/plans')} color="primary" size="large" sx={{backgroundColor:'#212121'}}>
            Get Started for Free
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Why Choose Linkify?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: "Automated Order Fulfillment", description: "Sync with AliExpress, eBay, and automate order processing." },
            { title: "Real-Time Stock Monitoring", description: "Stay ahead with instant stock updates from suppliers." },
            { title: "AI-Driven Pricing", description: "Adjust prices dynamically based on competitor analysis." },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            What Our Users Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { name: "Justin S.", review: "Linkify has transformed my dropshipping store. Fulfillment is now seamless!" },
              { name: "Ali P.", review: "Stock updates are real-time, and I never oversell. Best tool ever!" },
              { name: "Adam E.", review: "Linkify saves me hours every week. The automation is a game changer." },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card elevation={2} sx={{ p: 3 }}>
                  <CardContent>
                    <Typography variant="body1" fontStyle="italic">
                      "{testimonial.review}"
                    </Typography>
                    <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2 }}>
                      - {testimonial.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Choose Your Plan
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { name: "Starter", price: "$19/mo", features: ["Basic automation", "5K orders/month", "Email support"] },
            { name: "Pro", price: "$49/mo", features: ["Advanced automation", "Unlimited orders", "Priority support"] },
            { name: "Enterprise", price: "Custom", features: ["Full automation suite", "Dedicated manager", "24/7 support"] },
          ].map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={4} sx={{ p: 3, textAlign: "center" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {plan.name}
                  </Typography>
                  <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mt: 1 }}>
                    {plan.price}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {plan.features.map((feature, i) => (
                      <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#212121", color: "white", py: 4, textAlign: "center" }}>
        <Typography variant="body2">&copy; {new Date().getFullYear()} Linkify. All Rights Reserved.</Typography>
        <Box sx={{ mt: 1 }}>
          <Button href="/privacy" color="inherit" size="small">
            Privacy Policy
          </Button>
          <Button href="/terms" color="inherit" size="small">
            Terms of Service
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
