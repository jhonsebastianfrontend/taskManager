
# Task Manager App

Este es un gestor de tareas desarrollado con **React**, **Vite**, **TypeScript**, y **Node.js** con **Express**. La aplicación permite listar, crear, actualizar y eliminar tareas, y utiliza una base de datos local en memoria para gestionar los datos.

## Características

- **Listar tareas:** Visualiza todas las tareas en una interfaz fácil de usar.
- **Crear tareas:** Agrega nuevas tareas con un título y una descripción.
- **Actualizar tareas:** Edita los detalles de las tareas existentes.
- **Eliminar tareas:** Borra tareas que ya no son necesarias.
- **Base de datos en memoria:** Los datos se gestionan en tiempo de ejecución sin persistencia en disco.

## Tecnologías utilizadas

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## Requisitos previos

Asegúrate de tener instalados los siguientes elementos en tu sistema:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/jhonsebastianfrontend/taskManager.git
   cd taskManager
   ```

2. Instala las dependencias para el backend:

   ```bash
   cd server
   npm install
   ```

3. Instala las dependencias para el frontend:

   ```bash
   cd ../tasks
   npm install
   ```

## Uso

### Iniciar el servidor backend

1. Navega al directorio del servidor:

   ```bash
   cd server
   ```

2. Inicia el servidor:

   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:3000`.

### Iniciar el cliente frontend

1. Navega al directorio del cliente:

   ```bash
   cd ../tasks
   ```

2. Inicia la aplicación:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`. Se recomienda validar el puerto local

## Estructura del proyecto

```
task-manager-app/
├── tasks/            # Código del frontend
├── server/            # Código del backend
├── README.md          # Documentación del proyecto
```

### Frontend (`client`)

- `src/components`: Componentes React reutilizables.
- `src/pages`: Páginas principales de la aplicación.

### Backend (`server`)

- `routes`: Rutas de la API.
- `controllers`: Controladores de las rutas.
- `index.js`: Configuración principal del servidor.

## Endpoints de la API

| Método | Endpoint      | Descripción                    |
|--------|---------------|--------------------------------|
| GET    | `/tasks/get`      | Obtiene todas las tareas       |
| POST   | `/tasks/create`      | Crea una nueva tarea           |
| PUT    | `/tasks/edit/:id`  | Actualiza una tarea existente  |
| DELETE | `/tasks/delete/:id`  | Elimina una tarea por su ID    |

## Scripts

### Frontend

- `npm run dev`: Inicia el cliente en modo desarrollo.
- `npm run build`: Construye la aplicación para producción.

### Backend

- `npm run dev`: Inicia el servidor en modo desarrollo con hot-reloading.

## Contribución

¡Las contribuciones son bienvenidas! Si deseas agregar nuevas funciones o corregir errores, crea un fork del repositorio y abre un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Pruebas cypress

1. Navega al directorio del cliente:

   ```bash
   cd ..
   npm install cypress --save-dev
   ```

2. Inicia la aplicación:

   ```bash
   npx cypress open
   ```

   Seguir las instrucciones de la interfaz cypress

3.  Estructura de la Carpeta Cypress
Dentro de la carpeta cypress, encontrarás:

fixtures/: Archivos JSON para datos simulados.
e2e/: Lugar donde escribirás tus pruebas (archivos .spec.js o .spec.ts).
support/: Funciones compartidas y personalizaciones globales.

Dentro de la carpeta e2e, pegar la carpeta "taskTests"
Dentro de la carpeta fixtures, pegar el archivo "tasks.json"