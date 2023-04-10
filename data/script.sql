create schema Proyecto_Integrador;
use Proyecto_Integrador;
create table usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT  , 
mail VARCHAR(100) UNIQUE NOT NULL ,
contraseña VARCHAR(500) NOT NULL,
foto_de_perfil VARCHAR(200) ,
fecha_de_nacimiento DATE NOT NULL ,
dni INT UNIQUE NOT NULL, 
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);
insert into usuarios(id, mail, contraseña, foto_de_perfil, fecha_de_nacimiento, dni, createdAt, updatedAt) values (default, 'julio@gmail.com', '11223344*', '/images/users/julio.jpg', '1976-08-05', 24658390, default, default) ;
insert into usuarios values(default, 'isco@gmail.com', 'Madridismo','/images/users/julio.jpg' , '1990-03-17', 33683425, default, default);
insert into usuarios values(default, 'maradona@gmail.com', 'golconlamano', '/images/users/julio.jpg','1994-07-23',35753890, default, default);
insert into usuarios values(default, 'enzoperez@gmail.com', '9-12-2018', '/images/users/julio.jpg','1992-09-16',32783891, default, default);
insert into usuarios values(default, 'messi@gmail.com', 'pulga', '/images/users/julio.jpg','2000-06-24',39153850, default, default);