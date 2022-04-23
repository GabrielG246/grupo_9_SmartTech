module.exports= (sequelize,dataTypes) => {

    let alias = "User" ; 
    
    let cols= {
        id:{
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataTypes.INTEGER
        
        },
        name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        last_name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        username:{
            type: dataTypes.STRING(45),
            allowNull: false,
            unique:true
        },
        roles_id:{
            type: dataTypes.INTEGER,
            
        },
        userImage:{
            type: dataTypes.STRING,
            allowNull: false
        }
    
    }
    
    let config= {
        tableName: "users",
        timestamps: false
    }
    
    const User= sequelize.define(alias,cols,config);


    User.associate= function(models){

        // asociacion para traer los roles de los usuarios 
        
        User.belongsTo(models.Role,{
         foreignKey: "roles_id",
            as: "role"
        })

        //User.belongsTo(models.Roles,{
          //  foreignKey: "roles_id",
            //as: "rol"
        //})

        // No Eliminar , queda pendiente para el carrito //

        // User.hasMany(models.Cart,{
        //     foreignKey:"users_id",
        //     as: "carts"
        // })
    
        }

    return User;
    
};