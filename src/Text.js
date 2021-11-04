import React from 'react';
import './Home'


const useStyles = makeStyles({
    root: {},
  });

  function Text ({ darkMode, setDarkMode }) {
  
    const theme = useTheme();

    return (
        <Grid container>
          <Grid item={4} >Infor</Grid>
          <Grid item={4} >Infor</Grid>
          <Grid item={4} >Infor</Grid>
          </Grid>
    );
  }