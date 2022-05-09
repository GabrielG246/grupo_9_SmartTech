import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentTotales from './ContentTotales';

function ContentRowTop(){
    return(
        <React.Fragment>
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Smart Tech React Dashboard</h1>
					</div>
					<ContentTotales />
					<ContentRowCenter />
					
				</div>
				
        </React.Fragment>
    )

}
export default ContentRowTop;
				
				
					
	