const express = require("express")
const cors = require('cors')
const conexion = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.ventaPath = "/api/usuarios"
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    async dbConectar(){
        await conexion.connect(function(error){
            if(error){
                throw error
            }else{
                console.log('CONECTADO')
            }
        })
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.ventaPath, require("../routes/usuarios"))
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Escuchando desde http://localhost:${this.port}`)
        })
    }

}

module.exports = Server