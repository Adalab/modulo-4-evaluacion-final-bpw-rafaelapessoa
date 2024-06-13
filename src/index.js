const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
    console.log(`Server running in port : http://localhost:${PORT}`);
});

//conexion con la base de datos
async function getConnection() {
    const conex = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    await conex.connect();
    return conex;
}

//Leer/Listar todos los registros existentes.
server.get('/vinos', async (req, res) => {
    try {
        const conn = await getConnection();
        const select = 'SELECT * FROM vinos';
        const [result] = await conn.query(select);

        await conn.end();
        res.status(200).json({
            info: { count: result.length },
            results: result,
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

//Leer registros filtrado por el campo de tu interés.
server.get('/vinos/:tipo', async (req, res) => {    
    try {
        const { tipo } = req.params;
        const conn = await getConnection();
        const select = 'SELECT * FROM vinos WHERE tipo = ?';
        const [result] = await conn.query(select, [tipo]);

        if (result.length === 0) {
            res.status(400).json({ message: 'El tipo no existe en la base de datos' });
        } else {
            res.status(200).json({data: result });
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

//Insertar un registro en su entidad principal.
server.post('/vinos', async (req, res) => {
    try {
        const conn = await getConnection();
        const { nombre, tipo, denominacion_origen, bodega, nota_cata, imagen } = req.body;
        const sqlInsert = 'INSERT INTO vinos (nombre, tipo, denominacion_origen, bodega, nota_cata, imagen) VALUES (?,?,?,?,?,?)';
        const [nuevoVino] = await conn.query(sqlInsert, [
            nombre,
            tipo,
            denominacion_origen,
            bodega,
            nota_cata,
            imagen
        ]);
        res.status(200).json({
            success: true,
            id: nuevoVino.insertId,
        })
        await conn.end();
    } catch (error) {
        res.status(400).json(error);
    }  
});

//Actualizar un registro existente.
server.put('/vinos/:id', async (req, res) => {
    try {
        const conn = await getConnection();
        const idVino = req.params.id;
        const nuevaData = req.body;

        const modificarSql = "UPDATE vinos SET nombre = ?, tipo = ?, denominacion_origen = ?, bodega = ?, nota_cata = ?, imagen = ? WHERE id = ?"
        const [result] = await conn.query(modificarSql, [
            nuevaData.nombre,
            nuevaData.tipo,
            nuevaData.denominacion_origen,
            nuevaData.bodega,
            nuevaData.nota_cata,
            nuevaData.imagen,
            idVino,
        ]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                success: true
            });
        } else {
            res.status(400).json({ message: 'Id no encontrado' });
        }
        await conn.end();
    } catch (error){
        res.status(400).json(error);
    }  
});

//Eliminar un registro existente.
server.delete('/vinos/:id', async (req, res) => {
    try {
        const conn = await getConnection();
        const idVino = req.params.id;
        const deletarSql = "DELETE FROM vinos WHERE id = ?"
        const [result] = await conn.query(deletarSql, [idVino,]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                success: true
            });
        } else {
            res.status(400).json({ message: 'Id no encontrado'});
        }
        await conn.end();
    } catch (error){
        res.status(400).json(error);
    }  
});



