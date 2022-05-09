import {React, useState , useEffect}  from 'react';


function AllProducts(){

	const [products, setProducts] = useState([]);
	const [productsCuantity, setProductsCuantity]= useState([]);


	useEffect(()=>{
		fetch('http://localhost:3005/api/products' )
		.then(response => response.json())
		.then(data => {
			setProducts(data.products)
		})
		.catch(error => console.log(error))
	},[]) 

	

	



	useEffect(()=>{
		fetch('http://localhost:3005/api/products' )
		.then(response => response.json())
		.then(data => {
			setProductsCuantity(data.count)
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
							<h2>Productos en Base de Datos : {productsCuantity}</h2>
						</div>
						
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.image}
														alt={product.name} 
														style={{ width: '90%', height: '300px', objectFit: 'cover' }} 
													/>
												</div>
												<p> $ {product.price}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
				
				
			}
		</div>
	)
}

export default AllProducts;
