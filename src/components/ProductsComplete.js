import React from 'react';
import AllProducts from './AllProducts';
import ProductsList from './ProductsList';

function UsersComplete(){
    return(
        <React.Fragment>
				<div className="container-fluid">
					<AllProducts />
					<ProductsList />
				</div>
				
        </React.Fragment>
    )

}
export default UsersComplete;