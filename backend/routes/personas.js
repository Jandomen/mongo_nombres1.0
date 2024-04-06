const express = require('express')
const router = express.Router()
const Persona = require('../models/Persona')

router.post('/', async (req,res) => {
    try{
        const { nombre, edad } = req.body
        const persona = new Persona({ nombre, edad})
        await persona.save()
        res
        .status(201)
        .json({message: 'Persona añadida correctamente'})
    } catch (error) {
        res
        .status(500)
        .json({message:'Error al añadir a la persona'})
    }
})

module.exports = router