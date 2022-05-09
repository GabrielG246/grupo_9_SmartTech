import {React, useState , useEffect}  from 'react';
import ProductCard from './ProductCard';

function LastProductInDb(){
    
    const [ products, setProducts]= useState([]);

    useEffect(()=>{
          fetch('http://localhost:3005/api/products' )
          .then(response => response.json())
          .then(data => {
              setProducts(data.products)
          })
          .catch(error => console.log(error))
      },[])
  
  
    let product= products.pop()

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto en la base de datos</h5>
                    
                </div>
                <div className="card-body">
                    <div className="text-center">
                    </div>
                    < ProductCard {... product}/>
                   
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;




