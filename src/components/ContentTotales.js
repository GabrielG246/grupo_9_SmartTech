import {React, useState , useEffect}  from 'react';
import SmallCard from './SmallCard';

function ContentTotales(){
    
    const [productCuantity , setProductCuantity]= useState([]);

    const [userCuantity, setUserCuantity]= useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3005/api/products')
        .then(response => response.json())
        .then(data=> {
            setProductCuantity(data.count)

        })
    },[])
    useEffect(()=>{
        fetch('http://localhost:3005/api/users')
        .then(response => response.json())
        .then(data=> {
            setUserCuantity(data.count)

        })
    },[])
    
    let totalUsers = {
        title:'Total de usuarios' ,
        color:'warning',
        cuantity: userCuantity,
        icon:'fa-user'
    }

    let totalProducts = {
        title: 'Total de productos',
        color: 'primary', 
        cuantity: productCuantity,
        icon: 'fa-box'
    }

    


    let cartProps = [totalUsers,totalProducts];
    
    return (
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentTotales;