module.exports= (sequelize,dataTypes) => {

    let alias = "Carts" ; 
    
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
        Cart.belongsTo(models.User,{
            foreignKey: "users_id",
            as: "user"
        })
    
        Cart.hasMany(models.Cart_has_product,{
            foreignKey:"carts_id",
            as:"cart_has_product"
        })
    }
    return Cart;
    
    };