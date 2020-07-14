import React from 'react'
import IncomeItem from './IncomeItem.js'

const Income = (props) => {
   
    
    return(
        <div >
            <h2 style={{color:'#90EE90',}}>Income </h2>
            {props.income.map((income)=>(
                <IncomeItem key={income.id} income={income} />
            ))}
            
        </div>

    )
}


export default Income