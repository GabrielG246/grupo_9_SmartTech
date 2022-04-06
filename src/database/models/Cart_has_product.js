module.exports= (sequelize,dataTypes) => {

    let alias = "Cart_has_products" ; 
    
    let cols= {
        carts_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        products_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        amount:{
            type: dataTypes.INTEGER
        }
    }
    
    let config= {
        tableName: "carts_has_products" ,
        timestamps: false
    
    }
    
    const CartHasProduct= sequelize.define(alias,cols,config);
    

    // No eliminar, desarollamos más adelante //
    
    // CartHasProduct.associate= function(models){
    //     CartHasProduct.belongsTo(models.Cart,{
    //         foreignKey: "carts_id",
    //         as:"cart"

    //     })
    //     CartHasProduct.belongsTo(models.Product,{
    //         foreignKey: "products_id",
    //         as:"product"

    //     })


    // }

    return CartHasProducts;
    
    };