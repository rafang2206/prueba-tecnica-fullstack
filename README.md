# **Prueba Técnica de Epayco**

Este proyecto consiste en dos servicios: un **servicio REST** desarrollado en NestJS y un **servicio REST** desarrollado con Express que actúa como puente entre el cliente y el servicio servicio de NestJS. A continuación, se detallan los aspectos clave de la implementación, así como los pasos necesarios para la inicialización y uso del proyecto.

---

## **Descripción**
- **Servicio REST con NESTJS**:  
  Desarrollado en **NESTJS** con **Mongoose ORM**. Este servicio se conecta a una base de datos **MongoDB** y expone tres rutas principales:
  - **/users**: Registro de usuarios.
  - **/wallets**: Verificación de saldo y recarga de saldo.
  - **/buys**: Simulación de compra de productos.

- **Servicio REST EXPRESS**:  
  Construido con **TypeScript** y **Express**, siguiendo los principios de **DDD**, **Repository** y **SOLID**. Este servicio replica las rutas del servicio de NestJs y actúa como un intermediario entre el cliente y el servicio de NestJs, procesando la lógica necesaria a través de controladores.

- **Cliente**:  
  Construido con **ReactJs** y **Vite**, utilizamos react-router-dom, para manejar algunas rutas como register, wallets, y buys, en cada uno de ellas se encontraran los componentes que manejan la logica de negocio, utilizando librerias como formik para formularios, sonner para notificaciones tipo toast, axios para las peticiones al servicio rest, no vi la necesidad de manejar estado global, ya sea con context api, redux, zustan o jquery, por lo pequeño del proyecto.

---

## **Requerimientos**
Antes de iniciar el proyecto, asegúrate de tener instalados los siguientes programas:

- **Node.js** v20.x
- **Docker**
- **Nestjs CLI**
- **MongoDB (En caso de no utilizar la imagen Docker de la base de datos)**

---

Sigue los siguientes pasos para inicializar el proyecto:

1. **Configurar las variables de entorno del proyecto:**
   - Copia el archivo `.env.example` ubicado en la raíz del proyecto y renómbralo como `.env`.
   - Reemplaza las variables de entorno según la configuración de tu base de datos generada por Docker.

2. **Construir y levantar los servicios con Docker:**
   ```bash
   docker compose build
   docker compose up -d

Esto creara la Base de datos con Docker.

3. dirigirse a la carpeta api-nest
4. Copiar las variables de Entorno del archivo .env.example a un archivo .env
PORT = PUERTO EN EL QUE SE EJECUTARA EL SERVIDOR
SECRET = SECRETO PARA EL JWT
MONGO_URL = Url de la base de Datos Mongo

5. Crear una clave de Apps de Gmail y agregar a la variable de entorno
EMAIL_HOST= HOST DEL CORREO
EMAIL_USERNAME= EMAIL 
EMAIL_PASSWORD= PASSWORD


6. Una vez realizado estos Pasos, Ejecutar los comandos 
    ```bash
    npm install 
    npm run start:dev o npm run start para producción

Esto iniciara el Servicio de NestJS.

7. Posteriormente ingresar a la carpeta api-rest

8. Copiar las variables de Entorno del archivo .env.example a un archivo .env

9. Indicar el Puerto de la Aplicación PORT

10. Indicar la url del servicio NESTJS ejemplo: SERVER_URL=http://localhost:3000/api/v1

11. Indicar la url del Cliente Frontend para el CORS ejemplo: FRONTEND_URL=http://localhost:5173

12. Ejecutar el comando npm install

13. Ejecutar el comando npm run dev o npm run start para producción

Una vez realizado estos pasos podremos inicar el uso de nuestros servicios.

## **Ejecutar todos los servicios con Docker**
  Podran encontrar dos archivocs docker compose, el primero es el docker-compose.yml, este solo iniciara la base de datos en caso de que no se quiera utilizar mongo con Docker e iniciar los servicios de manera manual ejecutando:
  

    docker compose up 
  
  en su defecto si se quieren iniciar todos los proyectos con docker se puede utilizar el archivo docker-compose-services.yml, mediante el comando:


    docker compose -f docker-compose-services.yml up 
    
  para ello deberan copiar el archivo .env.example ubicado en la raiz del proyecto y añadir las variables correspondientes



RUTAS:
--------------------------------------------------------------------------
```bash
POST Register user
http://localhost:3001/api/user/register
Body:
{
    "document": "C1943300",
    "name": "Rafael",
    "email": "soliditydevpro@gmail.com",
    "phone": 3237419189
}
--------------------------------------------------------------------------
GET Get Balance
http://localhost:3001/api/wallet/balance?document=C1943300&phone=3237419189

Query Params:
document C1943300
phone 3237419189

--------------------------------------------------------------------------
POST Recharge Wallet
http://localhost:3001/api/wallet/recharge-wallet
Body:
{
    "document": "C1943300",
    "phone": 3237419189,
    "amount": 150
}

--------------------------------------------------------------------------
POST Get Code
http://localhost:3001/api/buy/get-code
Body:
{
    "document": "C1943300",
    "phone": 3237419189
}

--------------------------------------------------------------------------
Get Confirm Buy
http://localhost:3001/api/buy/confirm/27174/:code

Params:
code

Authorization
Bearer {sessionId}
--------------------------------------------------------------------------




Link de la Documentación https://documenter.getpostman.com/view/25258133/2sAXqtc2Zk