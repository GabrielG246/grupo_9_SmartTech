module.exports= (sequelize,dataTypes) => {

    let alias = "Role" ; 
    
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
        }
    
    };
    
    let config= {
        tableName: "roles",
        timestamps: false
    
    }
    
    const Rol= sequelize.define(alias,cols,config);

    Rol.associate= function(models){
    //Rol.hasMany(models.User,{
   //     foreignKey: "roles_id",
    //    as: "users"
    //})


    }


    return Rol;
    
    };