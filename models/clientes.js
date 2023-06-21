//Migracion 
const {Schema, model}=require('mongoose')

const ClientesSchema= Schema({

 //se define tipos de datos
    numeroDocumento:{
        type:String,
        unique:[true, 'El numero de documento:{VALUE} ya existe'],
        required: [true,'El campo numero de documento es requerido']
    },

    nombre:{
        type: String,
        required: [true,'El campo nombre es requerido']
    },
    
    correo:{
        type:String,
        unique:[true, 'El direccion de correo:{VALUE} ya existe'],
        required: [true,'El campo correo es requerido']
    },

    direccion:{
        type: String,
        required: [true,'La dirección es requerida']
    },

    celular:{
        type: String,
        required: [true,'El campo celular es requerido']
    },

    tipoCliente:{
        type:String,
        required: [true,'El tipo de cliente es requerido'],
    },

    estado:{
        type:Boolean,
        required:[true, 'El estado es obligatorio'],
        default:false,
    }
})
//este es el nombre del objeto Cliente
module.exports = model('Clientes', ClientesSchema)//Exportar el modelo

