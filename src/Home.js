import React from 'react';
import './Home'
import './App.css';
import { useTheme } from '@material-ui/styles';
import { Avatar, Box, Typography } from '@material-ui/core';


const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    width: '80rem',
    height: '40rem',
  };
  

function Home({ darkMode, setDarkMode }) {
  
    const theme = useTheme();

    return (
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
    
      <Box sx={{ ...commonStyles, borderColor: 'primary.main' }} />
      
      
    </Box>
    
  );
}

export default Home;