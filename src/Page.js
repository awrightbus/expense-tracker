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
            balance:'20000',
            value:'',
            userInput: '',
            income: [{
                id: 1,
                type:"PayCheck",
                value: 1500,
                },
                {
                id: 2,
                type:"Stock",
                value: 50,
                },
                {
                id: 3,
                type:"Youtube",
                value: 200,
                },
                ],
            expense: [],
                    }
    }

  

    render(){
        const {income, expense, balance} = this.state;
        return(
      <div>
      
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flex: 1 }}>
                    Expense Tracker
                </Typography>
            <Button color="inherit">Hi, {this.props.values.userName}</Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
         {/* box container for the account balance */}
         <Box
         display="flex" 
         justifyContent="center" 
          >
          <h1>Account Balance: {balance}</h1>
            
        </Box>
        {/* Box container fro the income and expense component */}
        <Box display="flex"
            justifyContent="space-between">
            <Income income={income} />
            <Expense />
        </Box>

                <br/>
            <Box 
            display="flex"
            justifyContent="center" 
            >
                <Button variant="outlined" 
                color="primary"
                //needs to take me to step 0
                onClick={this.props.login}
                >
                    Log Out
                </Button>
            </Box>
        </Container>
      </div>
    )
    }
    
}


export default Page;