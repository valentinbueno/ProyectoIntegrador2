module.exports = function(sequelize,dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id_producto:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
            
        },
        comentario:{
            type: dataTypes.STRING,
        },
        createdAt:{

        },
        updatedAt:{

        }
    };
    let config =  {
        tableName: 'comentarios', //Si el nombre de la tabla no coincide con el del modelo en plural.
        timestamps: true, //False: Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //True: Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    }; 
    const Comentario = sequelize.define(alias,cols,config);
    return Comentario;
}