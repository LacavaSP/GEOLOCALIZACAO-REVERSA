const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))
const porta = 2122
const host = '195.35.37.40'

app.listen(2122,() => {
    console.log(`SERVIDOR DE GEOLOCALIZACAO INICIADO EM http://${host}:${porta}`)
})