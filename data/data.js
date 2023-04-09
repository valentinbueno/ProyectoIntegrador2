const data = {
    products: [
        {
            imagen:'/images/products/img-macbook-pro-2019.jpg',
            nombre: 'MacBook Air',
            descripcion:'Sobrealimentado por el chip M2 de próxima generación, el MacBook Air rediseñado combina un rendimiento increíble y hasta 18 horas de duración de la batería en su carcasa de aluminio sorprendentemente delgada.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Jose',
                    comentario: 'Muy útil, la uso para trabajar y nunca me falló'
                },{
                    usuario:'Lopez',
                    comentario: 'Gran computadora!!'
                },{
                    usuario:'Martina',
                    comentario:'A veces se traba, prefiero Microsoft'
                },{
                    usuario:'Julieta',
                    comentario:'Soy diseñadora y es muy util para mis tareas'
                },{
                    usuario:'Tomas',
                    comentario:'Divertida para jugar juegos'
                }
            ],
        },

        {
            imagen: '/images/products/ipad2.jpg',
            nombre: 'IPAD PRO',
            descripcion:'Es un dispositivo de pantalla táctil que se encuentra categorizado como un intermedio entre los teléfonos inteligentes y los computadores portátiles. Puedes utilizarlo para leer, estudiar, ver películas o videos, escuchar música, escribir, comunicarte y más.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Marta',
                    comentario: 'Compré el aparato para mi hijo y pasa horas muy entretenido'
                },
            ],
        },

        {
            imagen:'/images/products/airpod.jpg',
            nombre: 'Airpods',
            descripcion:'Auriculares inalámbricos desarrollados por la compañía Apple, lo que significa que funcionan y se conectan a otros dispositivos compatibles sin cables, a través de conexión Bluetooth.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Franco',
                    comentario: 'Me encanta escuchar música para mis ratos libres, es muy autoconstructivo'
                },
            ],
        },

        {
            imagen:'/images/products/ps5.jpg',
            nombre: 'PS5',
            descripcion:'Con la llegada de la nueva generación de consolas, ahora, además de jugar, podemos transformar nuestro televisor en todo un centro multimedia, principalmente por la conexión a Internet, compatibilidad con apps y múltiples formatos de vídeo y audio.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Martin',
                    comentario: 'Tiene buenos juegos, un buen rendimiento con buenos gráficos y trae consigo, uno de los mejores mandos del mercado con retroalimentación.'
                },
            ],
        },

        {
            imagen:'/images/products/applewatch.jpg',
            nombre: 'Apple Watch',
            descripcion:'Es un reloj inteligente de Apple que te permite monitorear los resultados de tus actividades diarias e informarte sobre tu salud. Este primer smartwatch creado por la compañía de la manzana mordida funciona para mandar mensajes de texto y hacer llamadas de manera rápida y sencilla.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Juana',
                    comentario: 'Funciona muy bien, pero prefiero un reloj tradicional'
                },
            ],
        },

        {
            imagen:'/images/products/iphone.jpg',
            nombre: 'iPhone 14',
            descripcion:'El iPhone es un teléfono inteligente y multimedia de la compañía Apple. Lanzado por la compañía Apple el 29 de junio de 2007, el teléfono iPhone es un dispositivo considerado inteligente por sus funciones multimedia, conexión a Internet, pantalla táctil con tecnología multi-touch y ausencia de teclado físico.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Luciana',
                    comentario: 'Me mantiene conectada y puedo sacar fotos de primera calidad. Encantada con el dispositivo'
                },
            ],
        },

        {
            imagen:'/images/products/smart.jpg',
            nombre: 'Smart Tv',
            descripcion:'Televisión con la que tenemos acceso a internet. En ella se pueden ejecutar distintas aplicaciones que funcionan gracias a la conexión a internet y con una comodidad de visión mayor que si empleasemos un PC, Tablet o smartphone.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Julian',
                    comentario: 'Ideal para un fanático del deporte'
                },
            ],
        },

        {
            imagen:'/images/products/jbl.jpeg',
            nombre: 'JBL Flip 4',
            descripcion:'Es la siguiente generación de la premiada serie Flip; es un altavoz portátil que ofrece un sonido estéreo increíblemente potente. Este altavoz compacto funciona con una batería recargable de iones de litio de 3000 mAh, para que disfrutes de hasta 12 horas de reproducción continua de gran calidad.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Andrea',
                    comentario: 'Muy bueno para utilizar en reuniones entre amigos'
                },
            ],
        },

        {
            imagen:'/images/products/beats.jpg',
            nombre: 'Beats Headphones',
            descripcion:'Los auriculares circumaurales inalámbricos Beats Studio3 ofrecen un sonido premium y bloquean los ruidos externos gracias a la Cancelación activa del ruido.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Stella',
                    comentario: 'No quede satisfecha con el producto'
                },
            ],
        },

        {
            imagen:'/images/products/xbox.jpg',
            nombre: 'Xbox',
            descripcion:'La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 más 32 MB de ESRAM, con una velocidad de hasta 204 GB​ 500 GB de disco duro y un lector Blu-ray 6x.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Juan Martin',
                    comentario: 'EXCELENTE'
                },
            ],
        },

        {
            imagen:'/images/products/meta.png',
            nombre: 'Meta VR ',
            descripcion:'Meta Quest Pro es un dispositivo multifuncional de realidad virtual y mixta, diseñado para ayudar a las personas a hacer mejor su trabajo y a establecer conexiones significativas con otras personas que les importan, proporcionando, al mismo tiempo, una visión de lo que los futuros dispositivos de realidad aumentada',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Ignacio',
                    comentario: 'Una nueva manera de ver el entretenimiento'
                },
            ],
        },

        {
            imagen:'/images/products/samsung.webp',
            nombre: 'Samsung Galaxy S23 ',
            descripcion:'El Samsung Galaxy S23 sigue la estela del gama alta compacto del año pasado pero incorporando en su interior el Snapdragon 8 Gen 2, con un nuevo diseño, más batería, algunos cambios en sus cámaras y otras novedades.',
            fechaDeCarga:'05/07/2022',
            comments: [
                {
                    usuario:'Victoria',
                    comentario: 'No es el mejor Galaxy de los que he tenido'
                },
            ],
        },


        

        ],

    user: { 
        fotoDePerfil: '/images/users/julio.jpg',
        email: 'julio@gmail.com',
        usuario: "Julio Cesar",
        contraseña:'11223344*',
        nacimiento:"05/08/1976",
        dni: '24658390',
        
    },
   
}


module.exports= data