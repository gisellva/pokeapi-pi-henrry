## Pokémon App
Descripción
Este proyecto es una Single Page Application (SPA) que permite a los usuarios buscar, visualizar y crear Pokémon. Utiliza tecnologías modernas como React, Redux, Node.js, Express y Sequelize.

## Características
Búsqueda de Pokémon: Encuentra Pokémon por nombre.
Visualización de Detalles: Muestra información completa sobre cada Pokémon.
Filtrado y Ordenamiento: Filtra Pokémon por tipo y ordena la lista alfabéticamente o por ataque.
Creación de Nuevos Pokémon: Permite a los usuarios crear nuevos Pokémon y relacionarlos con sus tipos.
Interfaz de Usuario Atractiva: Diseñada con atención a la experiencia del usuario (UX/UI).
Requisitos
Asegúrate de tener instaladas las siguientes versiones mínimas:

Node.js: 12.18.3 o mayor
NPM: 6.14.16 o mayor
Puedes verificar tus versiones instaladas con:


Copiar código
node -v
npm -v
Dependencias
Este proyecto utiliza las siguientes dependencias:

React: 17.0.1
React DOM: 17.0.1
React Router DOM: 5.2.0
Redux: 4.0.5
React Redux: 7.2.3

##Instrucciones para Comenzar
Forkea el Repositorio: Haz un fork de este repositorio para tener tu propia copia en GitHub.

Clona el Repositorio: Clona el repositorio en tu máquina local.

Configuración de la Base de Datos:

Crea un archivo .env en la carpeta api con el siguiente contenido:
plaintext
Copiar código
DB_USER=tu_usuario_de_postgres
DB_PASSWORD=tu_contraseña_de_postgres
DB_HOST=localhost
Crea una base de datos llamada pokemon en PostgreSQL.
Instala las Dependencias:

Navega a la carpeta del proyecto y ejecuta:

     npm install
Ejecuta el Proyecto:

Inicia el servidor backend:


    cd api
    npm start

Inicia la aplicación frontend:

    Copiar código
    cd client
    npm start
    
##Rutas del Backend
GET /pokemons: Obtiene un arreglo de todos los Pokémon.
GET /pokemons/:id: Obtiene los detalles de un Pokémon específico.
GET /pokemons/name?="...": Busca Pokémon por nombre.
POST /pokemons: Crea un nuevo Pokémon en la base de datos.
GET /types: Obtiene todos los tipos de Pokémon.
Pruebas
Se recomienda implementar pruebas unitarias en al menos uno de los componentes del frontend y dos rutas del backend para asegurar la calidad del código.

##Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar, por favor abre un issue o envía un pull request.

##Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

<img src="./pokemon.png" alt="" />
