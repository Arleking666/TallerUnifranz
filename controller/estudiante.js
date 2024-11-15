const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.get('/students', async (req, res) => {
    try {
        const students = await prisma.students.findMany({});
        res.json({
            data: students,
            mensaje: 'Estudiantes obtenidos correctamente',
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al traer los estudiantes',
            error: error.message,
        });
    }
});

app.post('/students', async (req, res) => {
    try {
        const { nombre, apellido, edad, fechaDeNacimiento, email } = req.body;

        const estudianteExistente = await prisma.students.findUnique({
            where: {
                email: email,
            },
        });

        if (estudianteExistente) {
            return res.json({
                mensaje: 'Este estudiante ya fue registrado',
            });
        }

        const nuevoEstudiante = await prisma.students.create({
            data: {
                nombre,
                apellido,
                edad,
                fechaDeNacimiento: new Date(fechaDeNacimiento),
                email,
            },
        });

        res.json({
            mensaje: 'Estudiante registrado correctamente',
            data: nuevoEstudiante,
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al crear estudiante',
            error: error.message,
        });
    }
});

module.exports = app;