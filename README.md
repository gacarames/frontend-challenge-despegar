# Frontend Challenge Despegar

Esta aplicación se divide en dos partes, cada una tiene su directorio correspondiente. 

- **Server:** backend dedicado a proveer los endpoints para obtener los datos necesarios (Node & express).

- **Frontend:** es el cliente/interfaz que posibilita al usuario Filtrar de productos y navegar entre las distintas opciones (React.js).

## `server`

**Iniciar servidor de desarrollo express:**

```sh

cd ./server

npm install

npm run dev

``` 
Abrir [http://localhost:3000/api/restaurants/](http://localhost:3000/api/restaurants/) para ver en el navegador.

**Desplegar servidor express en produccion:**

```sh
npm run deploy
``` 

## `frontend`

**Iniciar la version de desarrollo de la aplicacion react:**

```sh
cd ./frontend

npm install

npm start
``` 

**Crear un directorio "build" con una compilación de producción:**
```sh
npm run buid
``` 

**Test unitario con Jest:**

```sh
npm run test
``` 