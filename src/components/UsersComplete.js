import React from 'react';
import AllUsers from './AllUsers';
import UsersList from './UsersList';

function UsersComplete(){
    return(
        <React.Fragment>
				<div className="container-fluid">
					<AllUsers />
					<UsersList />
				</div>
				
        </React.Fragment>
    )

}
export default UsersComplete;