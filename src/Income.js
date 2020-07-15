import React from 'react'
import IncomeItem from './IncomeItem.js'

class Income extends React.Component {
     constructor(props){
        super(props);

    }
    render(){
       const newItem = this.props.income.map((item)=>(
                <IncomeItem 
                key={item.id} 
                income={item}  
                delItemIncome={this.props.delItemIncome}/>
            ))
        return(
        <div >
            <h2 style={{color:'#90EE90',}}> Income </h2>

            {newItem}
            
        </div>

            )
    }
    
}


export default Income