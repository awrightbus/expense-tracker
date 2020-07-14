import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';



const Login = (props) => {
    
    return(
      <div>
      
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flex: 1 }}>
                    Expense Tracker
                </Typography>
            <Button color="inherit" onClick={props.next}>Sign Up</Button>
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
                label="Username" 
                onChange={props.change('userName')}
                
                
                //this has the values stay in the field
                
                />
                <br/>
                <TextField 
                id="filled-basic" 
                label="Password" 
                onChange={props.change('passWord')}
                
                
                
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
                //this onclick needs to take me to step two
                onClick={props.toPage}
                >
                    Log In
                </Button>
            </Box>
        </Container>
      </div>
    )
}


export default Login;