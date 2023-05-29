module.exports = function(sequelize,dataTypes)  {
    let alias = 'Usuario' ; // MAYUSCULA Y SINGULAR , UN SOBRENOMBRE PARA REQUERIRLO EN LOS CONTROLLERS, PARA SABER A QUE TABLA LLAMO.
    let cols ={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario:{
            type: dataTypes.STRING,
            allowNull: false 
        },
        mail:{
            type: dataTypes.STRING,
            allowNull: false
        },
        contraseña:{
            type: dataTypes.STRING,
            allowNull: false
        },
        foto_de_perfil:{
            type: dataTypes.STRING,
        },
        fecha_de_nacimiento:{
            type: dataTypes.DATE,
            allowNull: false
        },
        dni:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        created_at:{
            type: dataTypes.STRING,
        },
        updated_at:{
            type: dataTypes.STRING,
        }
    } ; // COLS ES UN OBJETO LITERAL CON EL MAPEO EXACTO COLUMNA POR COLUMNA DE MI TABLA SQL , HAY QUE PASARLO CON LAS CONSTRAINS.
    // LA VARIABLE COLS ES UN OBJETO LITERAL QUE TIENE PROPIEDADES, QUE CADA PROPIEDAD ES UN OBJETO LITERAL. ANIDACION DE OBJETOS LITERALES. ADENTRO DE ESTE TIENE PROPIEDADES QUE SON LAS CONTRAINS DE LA TABLA JUNTO CON LAS COLUMNAS.
    //TYPE ES UNA PROPIEDAD
    // TYPE VA AL OBJETO DATATYPES Y LE PIDE UNA PROPIEDAD OSEA, INTEGER, DATE.
    // DATATYPES ES UN OBJETO
    //INTEGER O CUALQUIERA DE ESAS ES UNA PROPIEDAD
    let config = {
        tableName: 'usuarios', //Si el nombre de la tabla no coincide con el del modelo en plural.
        timestamps: true, //False: Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //True: Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    }; //OBJETO LITERAL PARA CONFIGURAR LA TABLA

    const Usuario = sequelize.define(alias,cols,config);

    Usuario.associate = function(models){
        Usuario.hasMany(models.Comentario, {
            as: "comentario",
            foreing_key: "id_usuario"
        })
    }

    // EN ESTA VARIABLE ESTAS TRAYENDO EL PARAMETRO SEQUILIZE COMO UN OBJETO LITERAL CON EL METODO DEFINE QUE DEFINE EL MODELO Y LE PASA COMO VA A SER MI TABLA
    return Usuario; 
}
// Los dos parametros son 2 objetos literales
