import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td> ${props.price}</td>
                    <td>{props.specifications} </td>
                    
                </tr>
            )
        }
                        
export default ChartRow;
                    
    
        
