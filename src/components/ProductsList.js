import {React, useState , useEffect}  from 'react';
import ChartRow from './ChartRow';

function ProductsList (){


    const [products , setProducts]= useState([]);

    
    useEffect(()=>{
        fetch('http://localhost:3005/api/products')
        .then(response => response.json())
        .then(data=> {
            setProducts(data.products)

        })
    },[])

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr  className="m-0 font-weight-bold text-gray-800">
                                LISTADO DE PRODUCTOS 
                            </tr>

                            <tr>
                                <th>Nombre </th>
                                <th>Descripcion </th>
                                <th>Precio</th>
                                <th>Especificaciones</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default ProductsList;



