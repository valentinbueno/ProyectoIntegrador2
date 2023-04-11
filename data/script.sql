create schema Proyecto_Integrador;
use Proyecto_Integrador;
create table usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT  , 
usuario VARCHAR(100) UNIQUE NOT NULL,
mail VARCHAR(100) UNIQUE NOT NULL ,
contraseña VARCHAR(500) NOT NULL,
foto_de_perfil VARCHAR(200) ,
fecha_de_nacimiento DATE NOT NULL ,
dni INT UNIQUE NOT NULL, 
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);
-- Inserto los 5 usuarios
insert into usuarios(id, usuario,mail, contraseña, foto_de_perfil, fecha_de_nacimiento, dni, createdAt, updatedAt) values (default,'Julio Cesar', 'julio@gmail.com', '11223344*', '/images/users/julio.jpg', '1976-08-05', 24658390, default, default) ;
insert into usuarios values(default,'Isco', 'isco@gmail.com', 'Madridismo','/images/users/julio.jpg' , '1990-03-17', 33683425, default, default);
insert into usuarios values(default,'Diego Maradona', 'maradona@gmail.com', 'golconlamano', '/images/users/julio.jpg','1994-07-23',35753890, default, default);
insert into usuarios values(default,'Enzo Perez', 'enzoperez@gmail.com', '9-12-2018', '/images/users/julio.jpg','1992-09-16',32783891, default, default);
insert into usuarios values(default,'Lionel Messi', 'messi@gmail.com', 'pulga', '/images/users/julio.jpg','2000-06-24',39153850, default, default);

create table productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
nombre VARCHAR(100) NOT NULL,
descripcion VARCHAR(500),
id_creador INT UNSIGNED,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_creador) REFERENCEs usuarios(id)
);

-- Inserto los 10 productos
insert into productos(id, nombre, descripcion, id_creador, createdAt, updatedAt) values (default, 'IPAD PRO', 'Es un dispositivo de pantalla táctil que se encuentra categorizado como un intermedio entre los teléfonos inteligentes y los computadores portátiles. Puedes utilizarlo para leer, estudiar, ver películas o videos, escuchar música, escribir, comunicarte y más.',2, default, default);
insert into productos values(default,'Mackbook pro', 'Sobrealimentado por el chip M2 de próxima generación, el MacBook Air rediseñado combina un rendimiento increíble y hasta 18 horas de duración de la batería en su carcasa de aluminio sorprendentemente delgada.', 3, default, default);
insert into productos values(default,'PS5', 'Con la llegada de la nueva generación de consolas, ahora, además de jugar, podemos transformar nuestro televisor en todo un centro multimedia, principalmente por la conexión a Internet, compatibilidad con apps y múltiples formatos de vídeo y audio.', 5, default, default);
insert into productos values(default,'Apple Watch', 'Es un reloj inteligente de Apple que te permite monitorear los resultados de tus actividades diarias e informarte sobre tu salud. Este primer smartwatch creado por la compañía de la manzana mordida funciona para mandar mensajes de texto y hacer llamadas de manera rápida y sencilla.', 5, default, default);
insert into productos values(default,'Iphone 14', 'El iPhone es un teléfono inteligente y multimedia de la compañía Apple. Lanzado por la compañía Apple el 29 de junio de 2007, el teléfono iPhone es un dispositivo considerado inteligente por sus funciones multimedia, conexión a Internet, pantalla táctil con tecnología multi-touch y ausencia de teclado físico.', 4, default, default);
insert into productos values(default,'Smart Tv', 'Televisión con la que tenemos acceso a internet. En ella se pueden ejecutar distintas aplicaciones que funcionan gracias a la conexión a internet y con una comodidad de visión mayor que si empleasemos un PC, Tablet o smartphone.', 2, default, default);
insert into productos values(default,'JBL Flip 4', 'Es la siguiente generación de la premiada serie Flip; es un altavoz portátil que ofrece un sonido estéreo increíblemente potente. Este altavoz compacto funciona con una batería recargable de iones de litio de 3000 mAh, para que disfrutes de hasta 12 horas de reproducción continua de gran calidad.', 4, default, default);
insert into productos values(default,'Beats Headphones', 'Los auriculares circumaurales inalámbricos Beats Studio3 ofrecen un sonido premium y bloquean los ruidos externos gracias a la Cancelación activa del ruido.', 5, default, default);
insert into productos values(default,'Xbox', 'La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 más 32 MB de ESRAM, con una velocidad de hasta 204 GB​ 500 GB de disco duro y un lector Blu-ray 6x.', 1, default, default);
insert into productos values(default,'Meta VR', 'Meta Quest Pro es un dispositivo multifuncional de realidad virtual y mixta, diseñado para ayudar a las personas a hacer mejor su trabajo y a establecer conexiones significativas con otras personas que les importan, proporcionando, al mismo tiempo, una visión de lo que los futuros dispositivos de realidad aumentada', 3, default, default);

create table comentarios(
id_producto INT UNSIGNED,
id_usuario INT UNSIGNED,
comentario VARCHAR(280),
FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

-- Inserto los 4 comentarios
insert into comentarios(id_producto, id_usuario, comentario, createdAt, updatedAt ) values(1, 2,'toda mi vida use las tablets de Samsung, pero despues de probar esta, se que Ipad es mejor', default, default );
insert into comentarios values(3,2,'Me gusta mas la xbox, sinceramente',default,default);
insert into comentarios values(5,3,'Muy buena camara',default,default);
insert into comentarios values(8,5,'El sonido y la bateria al nivel de los mejores',default,default);