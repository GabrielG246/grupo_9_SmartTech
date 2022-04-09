module.exports= (sequelize,dataTypes) => {

    let alias = "Cart" ; 
    
    let cols= {
        id:{
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        total:{
            type: dataTypes.DECIMAL(11,2),
            allowNull: false

        },
        created_at:{
            type: dataTypes.DATE 
        },
        updated_at:{
            type: dataTypes.DATE
        },
        deleted_at:{
            type: dataTypes.DATE
        },
        users_id:{
            type: dataTypes.INTEGER
        }
    }
    
    let config= {
        tableName: "carts" ,
        timestamps: true
    
    }
    
    const Cart= sequelize.define(alias,cols,config);

    Cart.associate= function(models){

        // Dejar esta relación, si no funciona o da problemas 
        // No borrar, solo comentar 

      //  Cart.belongsToMany(models.Product,{
       //     as:'products',
       //     through:'carts_has_products',
      //      foreignKey:'carts_id',
       //     otherKey:'products_id',
      //      timestamps: true
      //  })


        // *** No Eliminar, quedan pendientes para asociar //

         Cart.belongsTo(models.User,{
             foreignKey: "users_id",
             as: "user"
         })
    
        // Cart.hasMany(models.Cart_has_product,{
        //     foreignKey:"carts_id",
        //     as:"cart_has_product"
        // })
    }
    return Cart;
    
    };