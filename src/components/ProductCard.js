import React  from 'react';

function ProductCard(props) {
    return (
        <>
        <h1> {props.name}</h1>
        <ul>
            <li>${props.price}</li>
            <li>{props.description}</li>
            <li>{props.specifications}</li>
            <li>{props.color}</li>
        </ul>
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.image} alt={props.name}/>
            </div>
        </div>
        </>
);
}

export default ProductCard;

            

                   
                   

            



  