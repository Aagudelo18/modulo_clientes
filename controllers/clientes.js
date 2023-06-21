//Importar paquetes requeridos de node
const {response}= require('express')

//Importacion de los modelos 
const Clientes=require('../models/clientes')

//insercion, modificacion de datos

//consultar
const clientesGet = async(req, res = response)=>{
    const{numeroDocumento}= req.query // desestructuracion obtiene lo que se manda del navegador
    

    //Buscar todos los usuarios colsultar los uasuarios
    const clientes = await Clientes.find()
    res.json({
        clientes
    })
}


const clientesPost = async(req,res = response) => {
    const body = req.body //Captura de atributos
    let mensaje = ''
    console.log(body)

    try {
        const cliente = new Clientes(body) //Instanciar el objeto
        await cliente.save()
        mensaje = 'La inserción se realizó exitosamente'
    } catch (error) {
            if(error.name === 'ValidationError'){
                console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values(error.errors).map(val => val.message)
            } else {
                console.error('Ocurrió un error al guardar el cliente:', error.message);
                mensaje = 'Ocurrió un error al guardar  el cliente';
            }
    }

    res.json({
        msg: mensaje
    })
}

const clientesPut= async(req, res= response)=>{
    //captura atributos o parametros
    const{numeroDocumento,nombre,correo,direccion, celular,tipoCliente, estado}=req.body
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const cliente = await Clientes.findOneAndUpdate({numeroDocumento:numeroDocumento},{nombre:nombre,correo:correo, direccion:direccion,
            celular:celular, tipoCliente:tipoCliente, estado:estado})
        mensaje='La modificacion se efectuo correctamente'

    }
    catch(error){
        mensaje='Se presentaron problemas en la modificacion'

    }

   

    res.json({
        msg: mensaje 
    })

}

const clientesDelete= async(req, res= response)=>{
    //captura atributos o parametros
    const{_id}=req.body
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const clientes = await Clientes.deleteOne({_id : _id})
        mensaje='La eliminacion se efectuo correctamente.'

    }
    catch(error){
        mensaje='Se presentaron problemas en  la eliminacion.'

    }

   

    res.json({
        msg: mensaje 
    })

}


module.exports={
    clientesGet,
    clientesPost,
    clientesPut,
    clientesDelete
}
