import {React, useState , useEffect}  from 'react';
import UserCard from './UserCard';

function LastUserInDb() {

  const [ users, setUsers]= useState([]);

  useEffect(()=>{
		fetch('http://localhost:3005/api/users' )
		.then(response => response.json())
		.then(data => {
			setUsers(data.users)
		})
		.catch(error => console.log(error))
	},[])


  let user= users.pop()
  
  return (
    <div className="col-lg-6 mb-4" >
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Último usuario registrado   </h5>
      </div>
      <div className="card-body">
        <div className="row">
            <UserCard  {...user} />
          </div>
        </div>
      </div>
    </div> 
);
}
export default LastUserInDb;