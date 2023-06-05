create schema Proyecto_Integrador;
use Proyecto_Integrador;
-- Creo Tabla Usuarios
create table usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT  , 
usuario VARCHAR(100) UNIQUE NOT NULL,
mail VARCHAR(100) UNIQUE NOT NULL ,
contraseña VARCHAR(500) NOT NULL,
foto_de_perfil VARCHAR(200) ,
fecha_de_nacimiento DATE NOT NULL ,
dni INT UNIQUE NOT NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);
-- Inserto los 5 usuarios
insert into usuarios(id, usuario,mail, contraseña, foto_de_perfil, fecha_de_nacimiento, dni, created_at, updated_at) values (default,'Julio Cesar', 'julio@gmail.com', '11223344*', '/images/users/julio.jpg', '1976-08-05', 24658390, default, default) ;
insert into usuarios values(default,'Isco', 'isco@gmail.com', 'Madridismo','/images/users/julio.jpg' , '1990-03-17', 33683425, default, default);
insert into usuarios values(default,'Diego Maradona', 'maradona@gmail.com', 'golconlamano', '/images/users/julio.jpg','1994-07-23',35753890, default, default);
insert into usuarios values(default,'Enzo Perez', 'enzoperez@gmail.com', '9-12-2018', '/images/users/julio.jpg','1992-09-16',32783891, default, default);
insert into usuarios values(default,'Lionel Messi', 'messi@gmail.com', 'pulga', '/images/users/julio.jpg','2000-06-24',39153850, default, default);

-- Creo Tabla productos
create table productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
imagen VARCHAR (200),
nombre VARCHAR(100) NOT NULL,
descripcion VARCHAR(500),
id_creador INT UNSIGNED,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_creador) REFERENCEs usuarios(id)
);

airpod.jpg
-- Inserto los 10 productos
insert into productos(id, imagen, nombre, descripcion, id_creador, created_at, updated_at) values (default,'/images/products/ipad2.jpg', 'IPAD PRO', 'Es un dispositivo de pantalla táctil que se encuentra categorizado como un intermedio entre los teléfonos inteligentes y los computadores portátiles. Puedes utilizarlo para leer, estudiar, ver películas o videos, escuchar música, escribir, comunicarte y más.',2, default, default);
insert into productos values(default,'/images/products/img-macbook-pro-2019.jpg','Mackbook pro', 'Sobrealimentado por el chip M2 de próxima generación, el MacBook Air rediseñado combina un rendimiento increíble y hasta 18 horas de duración de la batería en su carcasa de aluminio sorprendentemente delgada.', 3, default, default);
insert into productos values(default,'/images/products/ps5.jpg','PS5', 'Con la llegada de la nueva generación de consolas, ahora, además de jugar, podemos transformar nuestro televisor en todo un centro multimedia, principalmente por la conexión a Internet, compatibilidad con apps y múltiples formatos de vídeo y audio.', 5, default, default);
insert into productos values(default,'/images/products/applewatch.jpg','Apple Watch', 'Es un reloj inteligente de Apple que te permite monitorear los resultados de tus actividades diarias e informarte sobre tu salud. Este primer smartwatch creado por la compañía de la manzana mordida funciona para mandar mensajes de texto y hacer llamadas de manera rápida y sencilla.', 5, default, default);
insert into productos values(default,'/images/products/iphone.jpg','Iphone 14', 'El iPhone es un teléfono inteligente y multimedia de la compañía Apple. Lanzado por la compañía Apple el 29 de junio de 2007, el teléfono iPhone es un dispositivo considerado inteligente por sus funciones multimedia, conexión a Internet, pantalla táctil con tecnología multi-touch y ausencia de teclado físico.', 4, default, default);
insert into productos values(default,'/images/products/smart.jpg','Smart Tv', 'Televisión con la que tenemos acceso a internet. En ella se pueden ejecutar distintas aplicaciones que funcionan gracias a la conexión a internet y con una comodidad de visión mayor que si empleasemos un PC, Tablet o smartphone.', 2, default, default);
insert into productos values(default,'/images/products/jbl.jpeg','JBL Flip 4', 'Es la siguiente generación de la premiada serie Flip; es un altavoz portátil que ofrece un sonido estéreo increíblemente potente. Este altavoz compacto funciona con una batería recargable de iones de litio de 3000 mAh, para que disfrutes de hasta 12 horas de reproducción continua de gran calidad.', 4, default, default);
insert into productos values(default,'/images/products/beats.jpg','Beats Headphones', 'Los auriculares circumaurales inalámbricos Beats Studio3 ofrecen un sonido premium y bloquean los ruidos externos gracias a la Cancelación activa del ruido.', 5, default, default);
insert into productos values(default,'/images/products/xbox.jpg','Xbox', 'La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 más 32 MB de ESRAM, con una velocidad de hasta 204 GB​ 500 GB de disco duro y un lector Blu-ray 6x.', 1, default, default);
insert into productos values(default,'/images/products/meta.png','Meta VR', 'Meta Quest Pro es un dispositivo multifuncional de realidad virtual y mixta, diseñado para ayudar a las personas a hacer mejor su trabajo y a establecer conexiones significativas con otras personas que les importan, proporcionando, al mismo tiempo, una visión de lo que los futuros dispositivos de realidad aumentada', 3, default, default);

-- Creo Tabla Comentarios

create table comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_producto INT UNSIGNED,
id_creador INT UNSIGNED,
comentario VARCHAR(280),
FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_creador) REFERENCES usuarios(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

-- Inserto los 40 comentarios
insert into comentarios(id,id_producto, id_creador, comentario, created_at, updated_at ) values(default,1, 1,'toda mi vida use las tablets de Samsung, pero despues de probar esta, se que Ipad es mejor', default, default );
insert into comentarios values(default,1,5,'El sonido y la bateria al nivel de los mejores',default,default);
insert into comentarios values(default,1,4,'La calidad de la pantalla es impresionante.',default,default);
insert into comentarios values(default,1,3,'La duración de la batería es excelente.',default,default);
insert into comentarios values(default,2,1,'Es fácil de usar y navegar por el sistema operativo.',default,default);
insert into comentarios values(default,2,2,'La velocidad de procesamiento es impresionante.',default,default);
insert into comentarios values(default,2,4,'La conectividad Bluetooth funciona perfectamente.',default,default);
insert into comentarios values(default,2,5,'El almacenamiento interno es más que suficiente para todas mis necesidades.',default,default);
insert into comentarios values(default,3,1,'La integración de aplicaciones es fluida y sin problemas.',default,default);
insert into comentarios values(default,3,3,'Es liviano y fácil de transportar.',default,default);
insert into comentarios values(default,3,4,'La calidad de construcción es de alta calidad.',default,default);
insert into comentarios values(default,3,2,'Me gusta mas la xbox, sinceramente',default,default);
insert into comentarios values(default,4,1,'La interfaz de usuario es intuitiva y fácil de usar.',default,default);
insert into comentarios values(default,4,2,'La resolución de la pantalla es increíblemente nítida.',default,default);
insert into comentarios values(default,4,3,'La pantalla es resistente a rayones y golpes.',default,default);
insert into comentarios values(default,4,4,'La compatibilidad con otros dispositivos es excelente.',default,default);
insert into comentarios values(default,5,1,'La cámara toma fotografías y videos increíbles.',default,default);
insert into comentarios values(default,5,2,'La calidad del sonido es excelente.',default,default);
insert into comentarios values(default,5,3,'Muy buena camara',default,default);
insert into comentarios values(default,5,5,'La tecnología de reconocimiento de huellas dactilares es muy precisa.',default,default);
insert into comentarios values(default,6,1,'La calidad de imagen es increíble.',default,default);
insert into comentarios values(default,6,3,'La durabilidad del dispositivo es impresionante.',default,default);
insert into comentarios values(default,6,4,'La conectividad Wi-Fi es rápida y confiable.',default,default);
insert into comentarios values(default,6,5,'El diseño es elegante y moderno.',default,default);
insert into comentarios values(default,7,5,'La integración con otros servicios de Apple es excelente.',default,default);
insert into comentarios values(default,7,3,'La tecnología de carga rápida es muy útil.',default,default);
insert into comentarios values(default,7,2,'La calidad de construcción es duradera.',default,default);
insert into comentarios values(default,7,1,'La duración de la batería es impresionante.',default,default);
insert into comentarios values(default,8,4,'La tecnología de cancelación de ruido es impresionante.',default,default);
insert into comentarios values(default,8,3,'La tecnología de reconocimiento de voz es precisa y útil.',default,default);
insert into comentarios values(default,8,2,'La integración con otros dispositivos es excelente.',default,default);
insert into comentarios values(default,8,1,'La Xbox ofrece una experiencia de juego de alta calidad y una amplia variedad de títulos para disfrutar.',default,default);
insert into comentarios values(default,9,2,'La conectividad a internet es rápida y sin interrupciones.',default,default);
insert into comentarios values(default,9,3,'El precio es bastante elevado para algunos usuarios.',default,default);
insert into comentarios values(default,9,4,'El almacenamiento interno no es expandible.',default,default);
insert into comentarios values(default,9,5,'Tuve varios problemas técnicos con mi consola Xbox, incluyendo errores en la lectura de discos y pantallas congeladas. Fue bastante frustrante tener que lidiar con estos problemas de manera recurrente.',default,default);
insert into comentarios values(default,10,1,'La calidad del producto en general es impresionante.',default,default);
insert into comentarios values(default,10,2,'La duración de la batería disminuye con el tiempo.',default,default);
insert into comentarios values(default,10,4,'La pantalla es propensa a la rotura si se cae.',default,default);
insert into comentarios values(default,10,5,'La experiencia de realidad virtual fue impresionante, me sentí completamente inmerso en un mundo completamente nuevo y emocionante. ¡Fue como estar en otro universo! Definitivamente recomiendo probarlo al menos una vez en la vida.',default,default);