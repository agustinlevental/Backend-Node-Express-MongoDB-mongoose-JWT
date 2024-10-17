# Backend-Node-Express-MongoDB-Mongoose-JWT

Este proyecto es una API REST construida con Node.js, Express, MongoDB (a través de Mongoose) y JWT para autenticación. Proporciona funcionalidades para la creación y gestión de usuarios, cursos, newsletter y manejo de archivos, con roles diferenciados para usuarios y administradores.

## Descripción

Esta API permite gestionar usuarios, cursos y newsletters, con autenticación y autorización utilizando JSON Web Tokens (JWT). Los administradores pueden crear y gestionar cursos, así como manejar el envío de correos para el newsletter.

# Características

- **Autenticación con JWT**: Login seguro mediante JSON Web Tokens.
- **Gestión de usuarios**: Creación de usuarios, con roles de administrador y funcionalidades de middleware para procesar avatares.
- **Gestión de cursos**: Administración de cursos, incluyendo la subida de archivos de materiales y paginación.
- **Gestión de newsletter**: Creación y eliminación de newsletters.
- **Validación de formularios**: Middleware personalizado para la validación de datos.
- **MongoDB**: Uso de MongoDB como base de datos mediante Mongoose.

# Instalación
Clona este repositorio:
git clone https://github.com/agustinlevental/Backend-Node-Express-MongoDB-mongoose-JWT.git .
Ve al directorio del proyecto:
cd Backend-Node-Express-MongoDB-mongoose-JWT .

# Proximamente deploy: 
Proximamente haré un deploy en Heroku para poder probar en línea los endpoints.
En caso de querer usar el repositorio de manera local:
Crea un archivo en la raiz llamado .env, que deberá contener; 
DB_USER=<tu_usuario> (MongoDB)
DB_PASSWORD=<tu_contraseña>
DB_HOST=<tu_host_de_base_de_datos>
JWT_SECRET_KEY=<tu_clave_secreta_jwt>
IP_SERVER=<tu_ip_del_servidor>
API_VERSION=v1

# Uso
Para iniciar el servidor, ejecuta el siguiente comando:
yarn dev
o
npm start

El servidor estará disponible en http://localhost:3977/api/v1

#Endpoints
Algunos de los endpoints principales son:

Autenticación:
POST /auth/login: Inicio de sesión.
POST /auth/register: Registro de nuevos usuarios.
POST /auth/refresh_acces_token : Refrescar access token.

Usuarios:
POST /users: Creación de nuevos usuarios (solo administradores).

Cursos:
POST /courses: Creación de un curso (solo administradores).
GET /courses: Obtención de una lista de cursos con paginación.

Newsletter:
POST /newsletter: Suscripción al newsletter.
DELETE /newsletter: Eliminación de un suscriptor del newsletter.


# Tecnologías
Node.js: Entorno de ejecución para el backend.

Express: Framework para construir la API REST.

MongoDB & Mongoose: Base de datos NoSQL y ORM para interactuar con MongoDB.

JWT: Autenticación basada en tokens.

Creación de Middlewares para la gestión de archivos subidos y autenticación.
