module.exports = function(sequelize,dataTypes) {
    let alias = 'Producto' ;
    let cols= {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
            allowNull: false
            
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        id_creador:{
            type: dataTypes.INTEGER,
        },
        created_at:{
            type: dataTypes.STRING,
        },
        updated_at:{
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: 'productos', //Si el nombre de la tabla no coincide con el del modelo en plural.
        timestamps: true, //False: Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //True: Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };   
    const Producto = sequelize.define(alias,cols,config);

    Producto.associate = function(models){
        Producto.hasMany(models.Comentario, {
            as: "comentario",
            foreing_key: "id_producto",
        })
        }

    return Producto;
}