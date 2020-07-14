import React from 'react'
import Page from './Page.js'
import UserDetails from './UserDetails';



class Login extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        step: 1,
        firstName: '',
        lastName: '',
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

    //handle change in the input field 
    handleChange = (input) => e => {
        this.setState({[input]: e.target.value})
        
    };

    render(){
        const {step} = this.state;
        const {firstName, lastName, email} = this.state;
        // this is so i can pass the values into each component 
        const values = {firstName, lastName, email};

        switch(step){
            case 1: 
            return(
                <div>
                    
                    <UserDetails next={this.nextStep} change={this.handleChange} values = {values}/>
                </div>
            )
            break;
            case 2:
            return(
                <div>
                    <Page 
                    prev={this.prevStep}
                    values={values}
                    >
                        
                    </Page>
                </div>
            )
            break;
        default:
        return(
            <div>
                <h1> Error </h1>
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


export default Login