import React from 'react';
import Income from './Income.js'
import Expense from './Expense.js'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';




class Page extends React.Component  {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
      <div>
      
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flex: 1 }}>
                    Expense Tracker
                </Typography>
            <Button color="inherit">Hi, {this.props.values.firstName}</Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
         {/* box container for the account balance */}
         <Box
         display="flex" 
         justifyContent="center" 
          >
          <h1>Account Balance (current balance will go here)</h1>
            
        </Box>
        {/* Box container fro the income and expense component */}
        <Box display="flex"
            justifyContent="space-between">
            <Income />
            <Expense />
        </Box>

                <br/>
            <Box 
            display="flex"
            justifyContent="center" 
            >
                <Button variant="outlined" 
                color="primary"
                onClick={this.props.prev}>
                    Log Out
                </Button>
            </Box>
        </Container>
      </div>
    )
    }
    
}


export default Page;