// Updated Navbar Component
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Citizen Services Platform
        </Typography>
        <div>
          <Button color="inherit" href="/" startIcon={<HomeIcon />}>
            Home
          </Button>
          <Button color="inherit" href="/eligibility" startIcon={<CheckCircleIcon />}>
            Eligibility
          </Button>
          <Button color="inherit" href="/dashboard" startIcon={<DashboardIcon />}>
            Dashboard
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
