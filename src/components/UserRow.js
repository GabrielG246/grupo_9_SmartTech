import React from 'react';


function UserRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.last_name}</td>
                    <td>{props.user}</td>
                    <td>{props.email} </td>
                    
                </tr>
            )
        }
                        
export default UserRow;