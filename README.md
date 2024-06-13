# Proyecto de API REST para Gestión de Vinos

Este proyecto es una API REST desarrollada con Node.js, Express, CORS y MySQL para gestionar una base de datos de vinos. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los registros de vinos.

## Tecnologías utilizadas

- Node.js
- Express
- CORS
- MySQL
- dotenv

## Requisitos

- Node.js
- MySQL
- Archivo `.env` con la configuración de la base de datos

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-rafaelapessoa.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd tu-repositorio
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:
    ```env
    PORT=5001
    DB_HOST=tu_host_de_base_de_datos
    DB_USER=tu_usuario_de_base_de_datos
    DB_PASSWORD=tu_contraseña_de_base_de_datos
    DB_NAME=nombre_de_tu_base_de_datos
    ```

## Uso

1. Inicia el servidor:
    ```sh
    npm start
    ```

2. La API estará disponible en `http://localhost:5001`.

## Endpoints

### Obtener todos los vinos
```http
GET /vinos
```

### Obtener vinos por tipo
```http
GET /vinos/:tipo
```
### Insertar un nuevo vino
```http
POST /vinos
```
## Cuerpo de la solicitud:
```http
{
    "nombre": "nombre_del_vino",
    "tipo": "tipo_del_vino",
    "denominacion_origen": "denominacion_origen",
    "bodega": "nombre_de_la_bodega",
    "nota_cata": "nota_de_cata",
    "imagen": "url_de_la_imagen"
}
```

### Actualizar un vino existente
```http
PUT /vinos/:id
```
## Cuerpo de la solicitud:
```http
{
    "nombre": "nuevo_nombre",
    "tipo": "nuevo_tipo",
    "denominacion_origen": "nueva_denominacion_origen",
    "bodega": "nueva_bodega",
    "nota_cata": "nueva_nota_de_cata",
    "imagen": "nueva_url_de_imagen"
}
```

### Eliminar un vino
```http
DELETE /vinos/:id
```
### Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio.

Creado por @rafaelapessoa





