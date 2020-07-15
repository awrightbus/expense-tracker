import React from 'react'

class IncomeItem extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){

        const {id, title} = this.props.income
        return(
        <div >
            
            <ul>
              <li style={{
                margin: '0px',
                padding: '0px',
                display:'flex',
                justifyContent:'space-between'}}>
                <p style={{
                backgroundColor: '#90EE90',
                paddingRight: '20px',
                border:'1px black solid',
                }}>
                {this.props.income.type}
                </p>

             <button 
                onClick={this.props.delItemIncome.bind(this, id)}
                style={{
                    backgroundColor:'#ff0000', 
                     color:'#fff', 
                    border:'none', 
                    padding:'1px 2px',
                    borderRadius: '50%',
                    cursor: "pointer",
                    }}>x</button>
                </li>
            </ul>
        </div>

    )
    }
    
}


export default IncomeItem