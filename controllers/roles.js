//Importar paquetes requeridos de node
const {response}= require('express')

//Importacion de los modelos 
const Roles = require('../models/roles')

//insercion, modificacion de datos

//consultar
const rolesGet = async(req, res = response)=>{
    const{nombre}= req.query // desestructuracion obtiene lo que se manda del navegador
    

    //Buscar todos los usuarios colsultar los uasuarios
    const roles = await Roles.find()
    res.json({
        roles
    })
}
const rolesPost = async (req, res = response) => {
    // Capturar atributos o parámetros
    const body = req.body;
    let mensaje = '';
    console.log(body);
    
    try {
      const roles = new Roles(body); // Instanciar el objeto
  
      // Guardar objeto
      await roles.save();
      mensaje = 'La inserción se realizó exitosamente';
    } catch (error) {
      if (error.name === 'ValidationError') {
        console.error(Object.values(error.errors).map((val) => val.message));
        mensaje = Object.values(error.errors).map((val) => val.message);
      } else {
        console.error(error.message);
        mensaje = error.message;
      }
    }
    
    res.json({
      msg: mensaje
    });
  };
  

const rolesPut= async(req, res= response)=>{
    //captura atributos o parametros
    const{n_documento,nombre,correo,direccion, celular,tipo_cliente, estado}=req.body
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const clientes = await Clientes.findOneAndUpdate({n_documento:n_documento},{nombre:nombre},{correo:correo},{direccion:direccion},
            {celular:celular},{tipo_cliente:tipo_cliente},{estado:estado})
        mensaje='La modificacion se efectuo correctamente'

    }
    catch(error){
        mensaje='Se presentaron problemas en la modificacion'

    }

   

    res.json({
        msg: mensaje 
    })

}

const rolesDelete= async(req, res= response)=>{
    //captura atributos o parametros
    const{_id}=req.body
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const roles = await Roles.deleteOne({_id : _id})
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
   rolesGet,
   rolesPost,
   rolesPut,
   rolesDelete
}