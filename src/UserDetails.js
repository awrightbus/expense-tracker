import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';



const UserDetails = (props) => {
    
    return(
      <div>
      
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flex: 1 }}>
                    Expense Tracker
                </Typography>
            <Button color="inherit">Not Logged In</Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
         <Box
         display="flex" 
         justifyContent="center" 
         
         >
             <form  noValidate autoComplete="on">
                <TextField 
                id="standard-basic" 
                label="First name" 
                
                onChange={props.change('firstName')}
                //this has the values stay in the field
                defaultValue ={props.values.firstName}
                />
                <br/>
                <TextField 
                id="filled-basic" 
                label="Last name" 
                
                onChange={props.change('lastName')}
                defaultValue ={props.values.lastName}
                />
                <br/>
                <TextField 
                id="filled-basic" 
                label="Enter email address" 
                onChange={props.change('email')}
                defaultValue ={props.values.email}
                 />
            </form>
            </Box>
                <br/>
            <Box 
            display="flex"
            justifyContent="center" 
            >
                <Button variant="outlined" 
                color="primary"
                onClick={props.next}>
                    Create Account
                </Button>
            </Box>
        </Container>
      </div>
    )
}


export default UserDetails;