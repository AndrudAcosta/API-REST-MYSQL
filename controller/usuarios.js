const {response} = require('express')

const conexion = require('../database/config')


const getUsuarios = async (req, res = response) =>  {

    const consultaUsuario = conexion.query('SELECT * FROM usuarios',function(error,resultados,fields){
        if(error)
            throw error
        
            res.json({
                msg:'Usuario consultado',
                resultados
            })
    })
}

const postUsuarios = async(req,res)=>{

    const {nombre, documento, telefono} = req.body

    const crearUsuario = conexion.query(`INSERT INTO usuarios (nombre, documento, telefono) VALUES ('${nombre}','${documento}','${telefono}')`,
    function(error,resultado){
        if (error) throw error
        res.json({
            msg:'Usuario creado',
            resultado
        })
    }
    )
}


const deleteUsuarios = async(req,res)=>{
    const {id}=req.query

    const eliminarUsuario = conexion.query(`DELETE FROM usuarios WHERE usuarios.id='${id}'`,
    function(error,result){
        if(error) throw error
        res.json({
            msg:'Usuario eliminado',
            result
        })
    })
}


const putUsuarios = async(req,res)=>{
    const {id, nombre, documento, telefono}=req.body

    const modificarUsuario = conexion.query(`UPDATE usuarios SET id = '${id}', nombre = '${nombre}', documento = '${documento}', telefono = '${telefono}' WHERE id='${id}'`,
    function(error,resultado){
        if(error) throw error
        res.json({
            msg:'Usuario modificado',
            resultado
        })
    })
}

module.exports = {
    getUsuarios,
    postUsuarios,
    deleteUsuarios,
    putUsuarios
}