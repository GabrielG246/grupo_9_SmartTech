module.exports= (sequelize,dataTypes) => {

    let alias = "Products" ; 
    
    let cols= {
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: dataTypes.STRING,
        allowNull: false
    },
    price:{
        type: dataTypes.DECIMAL(11,2),
        allowNull: false
    },
    description:{
        type: dataTypes.STRING,
        allowNull: false
    },
    specifications:{
        type: dataTypes.STRING,
        allowNull: false
    },
    color:{
        type: dataTypes.STRING,
        allowNull: false
    },
    image:{
        type: dataTypes.STRING,
        allowNull: false
    }
    };
    
    let config= {
        tableName: "products",
        timestamps:false
    }
    
    const Products= sequelize.define(alias,cols,config);
    
    // Dejar esta relación, si no funciona o da problemas 
    // No borrar, solo comentar 
    
   // Product.associate= function(models){
    
      //  Product.belongsToMany(models.Cart,{
      //      as:'Carts',
      //      through: 'cart_has_products',
      //      foreignKey: 'products_id',
      //      otherKey:'carts_id',
      //      timestamps: false
      //  })
    
    
    //}
    // No eliminar, asociaciones pendientes para el carrito //
    
    // Product.associate= function(models){
    //     Product.hasMany(models.Cart_has_product,{
    //         foreignKey: "products_id",
    //         as: "carts_has_products"
    //     })
    
    
    //     }
    
    return Products;
    };