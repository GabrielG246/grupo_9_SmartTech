import React  from 'react';

function UserCard(props) {
    return (
        <>
        <ul>
            
            <li>{props.name}</li>
            <li>{props.last_name}</li>
            <li>{props.email}</li>

        </ul>
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.userImage} alt={props.name}/>
            </div>
        </div>
            

        </>
  );


  
}

export default UserCard;
  

  


 

     
