const express = require('express')
const { PrismaClient } = require('@prismaClient')

const app = express();
const prisma = new PrismaClient();

app.get('/estudiante', async (req, res) => {
    try {
        const estudiante = await prisma.estudiante.findMany({});
        if (estudiante) {
            res.json({
                data: estudiante,
                mensaje: 'Estudiantes obtenidos correctamente'
            })
        }
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al traer los estudiantes",
            error: error.mensaje
        })
    }
})

app.post('/estudiante', async (req, res) => {
    try {
        const {nombre, apellido, edad, fechaNacimiento} = req.body;
        if(nombre == '' || apellido == ''){
            res.json({
                mensaje: "Todos los campos son obligatorios"
            })
            return;
        }

        
    } catch (error) {

    }
});