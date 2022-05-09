import {React, useState , useEffect}  from 'react';

function AllUsers(){

	const [users, setUsers] = useState([]);
	const [usersCuantity, setUsersCuantity]= useState([]);


	useEffect(()=>{
		fetch('http://localhost:3005/api/users' )
		.then(response => response.json())
		.then(data => {
			setUsers(data.users)
		})
		.catch(error => console.log(error))
	},[]) 

	

	



	useEffect(()=>{
		fetch('http://localhost:3005/api/users' )
		.then(response => response.json())
		.then(data => {
			setUsersCuantity(data.count)
		})
		.catch(error => console.log(error))
	},[])

	



		

	return(
		<div className="container-fluid">
			{
				
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
					
							
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Usuarios en la Base de Datos : {usersCuantity}</h2>
						</div>
						
						{
							users.length > 0 && users.map((user, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{user.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={user.userImage}
														alt={user.name} 
														style={{ width: '90%', height: '200px', objectFit: 'cover' }} 
													/>
												</div>
												<p> {user.email}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ users.length === 0 && <div className="alert alert-warning text-center">No se encontraron usuarios</div>}
				</>
				
				
			}
		</div>
	)
}

export default AllUsers;