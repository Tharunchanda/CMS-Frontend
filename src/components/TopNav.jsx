import React from 'react';
import { Box, IconButton } from '@mui/material';
import { HiUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end', // This aligns children to the right
        backgroundColor: '#1f2937',
        p: 2,
        width: '100%',
      }}
    >
      <IconButton component={Link} to="/profile" sx={{ color: '#fff' }}>
        <HiUserCircle style={{ width: 32, height: 32 }} />
      </IconButton>
    </Box>
  );
};

export default TopNav;
