const express = require('express')
const moongoose =  require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

moongoose.connect( process.env.MONGO_URI )

const db = moongoose.connection
db.on('error', console.error.bind(console, 'Error en conectarse a Mongo :( '))
db.once('open', () => console.log('Conexion exitosa a mongo db :) ') )

const personasRouter = require('./routes/personas')
app.use('/api/personas', personasRouter)

app.listen(PORT, () => {
    console.log('El servidor esta en el puero escucha: ' + PORT )
})