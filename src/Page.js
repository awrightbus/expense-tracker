import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';



const Page = (props) => {
    
    return(
      <div>
      
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flex: 1 }}>
                    Expense Tracker
                </Typography>
            <Button color="inherit">Hi, {props.values.firstName}</Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
         <Box
         display="flex" 
         justifyContent="center" 
          >
          <h1>Account Balance</h1>
            
            </Box>
                <br/>
            <Box 
            display="flex"
            justifyContent="center" 
            >
                <Button variant="outlined" 
                color="primary"
                onClick={props.prev}>
                    Go Back
                </Button>
            </Box>
        </Container>
      </div>
    )
}


export default Page;