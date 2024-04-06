const mongoose = require('mongoose')

const personaSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
})

module.exports = mongoose.model('Persona', personaSchema)