import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';



const Header = () => {
    
    return(
      <AppBar position="static">
       <Toolbar>
        <Typography variant="h6" style={{ flex: 1 }}>
        Expense Tracker
        </Typography>
        <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    )
}


export default Header 