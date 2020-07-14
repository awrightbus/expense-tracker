import React from 'react'
import Page from './Page.js'
import UserDetails from './UserDetails';
import Login from './Login.js'



class CreateAccount extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        step: 0,
        firstName: '',
        lastName: '',
        userName: '',
        passWord: '',
        email: '',
        }
    }
    //will have a method to proceed to the next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step +1
        })
    }

    //method to take form to the previous page 
      prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step -1
        });
    }

    //when using the login terminal takes you to step 2 which is the main page
    toPage = () => {
        const {step} = this.state;
        this.setState({
            step: step +2
        });
    }

    toLogIn = () => {
        const {step} = this.state;
        this.setState({
            step: step -2,
            userName: "",
            passWord: "",
        });
    }

    //handle change in the input field 
    handleChange = (input) => e => {
        this.setState({[input]: e.target.value})
        
    };


    render(){
        const {step} = this.state;
        const {firstName, lastName,userName, passWord, email} = this.state;
        // this is so i can pass the values into each component 
        const values = {firstName, lastName, email, userName, passWord};

        switch(step){
            case 1: 
            return(
                <div>
                    
                    <UserDetails prev={this.prevStep} next={this.nextStep} change={this.handleChange} values = {values}/>
                </div>
            )
            break;
            case 2:
            return(
                <div>
                    <Page 
                    login={this.toLogIn}
                    values={values}
                    >
                        
                    </Page>
                </div>
            )
            break;
        default:
        return(
            <div>
                <Login  toPage={this.toPage} next={this.nextStep} values = {values} change={this.handleChange}/>
            </div>
        )
    }
        return(
            <div>
                Test
            </div>
        )
    }
}


export default CreateAccount