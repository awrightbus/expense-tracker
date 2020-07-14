import React from 'react'

const IncomeItem = (props) => {
   const {income} = props
   const {type,value,id} = income
    return(
        <div>
            <p style={{
            backgroundColor: '#90EE90',
            paddingRight: '20px',
            border:'1px black solid',
            marginRight:'100px',
            }}>{type}</p>
            <button  style={{
                backgroundColor: '#ff0000', 
                color:'#fff', 
                border:'none', 
                padding:'5px 9px',
                borderRadius: '50%',
                cursor: "pointer",
                
                }}>x</button>
        </div>

    )
}


export default IncomeItem