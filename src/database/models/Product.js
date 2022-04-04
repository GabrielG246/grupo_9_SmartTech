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
    type: dataTypes.STRING(45),
    allowNull: false
},
price:{
    type: dataTypes.DECIMAL(11,2),
    allowNull: false
},
description:{
    type: dataTypes.STRING(500),
    allowNull: false
},
specifications:{
    type: dataTypes.STRING(500),
    allowNull: false
},
color:{
    type: dataTypes.STRING(45),
    allowNull: false
}
};

let config= {
    tableName: "products",
    timestamps:false
}

const Product= sequelize.define(alias,cols,config);

Product.associate= function(models){
    Product.hasMany(models.Cart_has_product,{
        foreignKey: "products_id",
        as: "carts_has_products"
    })


    }

return Product;
};