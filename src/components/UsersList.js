import {React, useState , useEffect}  from 'react';
import UserRow from './UserRow';

function UsersList (){


    const [users , setUsers]= useState([]);

    
    useEffect(()=>{
        fetch('http://localhost:3005/api/users')
        .then(response => response.json())
        .then(data=> {
            setUsers(data.users)

        })
    },[])

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr  className="m-0 font-weight-bold text-gray-800">
                                LISTADO DE USUARIOS 
                            </tr>

                            <tr>
                                <th>Nombre </th>
                                <th>Apellido  </th>
                                <th> Nickname </th>
                                <th> Email</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                            users.map( ( row , i) => {
                                return <UserRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default UsersList;