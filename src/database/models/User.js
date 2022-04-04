module.exports= (sequelize,dataTypes) => {

    let alias = "Users" ; 
    
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
            
        }
    
    }
    
    let config= {
        tableName: "users",
        timestamps: false
    }
    
    const User= sequelize.define(alias,cols,config);

    User.associate= function(models){
        User.belongsTo(models.Rol,{
            foreignKey: "roles_id",
            as: "rol"
        })
        
        User.hasMany(models.Cart,{
            foreignKey:"users_id",
            as: "carts"
        })
    
        }

    return User;
    
};