import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Import Link for navigation
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import Home from './components/Home';
import Eligibility from './components/Eligibility';
import Dashboard from './components/Dashboard';
import SchemeInfo from './components/SchemeInfo';
import Footer from './components/Footer';
import Login from './components/Login'; // Import the Login component

const App = () => {
  return (
    <Router>
      <Container
        maxWidth="lg"
        sx={{
          padding: 2,
          marginTop: 3,
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          minHeight: '80vh',
        }}
      >
        <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: 4, fontWeight: 'bold' }}>
          Citizen Services Platform
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  padding: 3,
                  borderRadius: '8px',
                  boxShadow: 3,
                  backgroundColor: '#fff',
                  textAlign: 'center',
                  minHeight: '200px',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                  Home
                </Typography>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#1976d2',
                      color: '#fff',
                      '&:hover': { backgroundColor: '#1565c0' },
                    }}
                  >
                    Go to Home
                  </Button>
                </Link>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  padding: 3,
                  borderRadius: '8px',
                  boxShadow: 3,
                  backgroundColor: '#fff',
                  textAlign: 'center',
                  minHeight: '200px',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                  Eligibility
                </Typography>
                <Link to="/eligibility" style={{ textDecoration: 'none' }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#1976d2',
                      color: '#fff',
                      '&:hover': { backgroundColor: '#1565c0' },
                    }}
                  >
                    Check Eligibility
                  </Button>
                </Link>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  padding: 3,
                  borderRadius: '8px',
                  boxShadow: 3,
                  backgroundColor: '#fff',
                  textAlign: 'center',
                  minHeight: '200px',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                  Login
                </Typography>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#1976d2',
                      color: '#fff',
                      '&:hover': { backgroundColor: '#1565c0' },
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Routes for different components */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scheme-info" element={<SchemeInfo />} />
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
};

export default App;
