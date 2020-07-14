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
            <Button color="inherit" onClick={props.prev}>Log in</Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
         <Box
         display="flex" 
         justifyContent="center" 
         
         >
             <form  noValidate autoComplete="on">
                 <TextField 
                id="filled-basic" 
                label="user name" 
                onChange={props.change('userName')}
                defaultValue ={props.values.userName}
                 />
                
                <br/>
    
                <TextField 
                id="filled-basic" 
                label="password" 
                onChange={props.change('passWord')}
                
                 />
                <br/>
                <TextField 
                id="filled-basic" 
                label="Enter email address" 
                onChange={props.change('email')}
                
                 />
                 <br/>
               
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