const { Schema, model } = require('mongoose');

const RolesSchema = Schema({
  codigo: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  permisos: [{
    type: String
  }],

  estado:{
    type:Boolean,
    required:[true, 'El estado es obligatorio'],
    default:false,
}
});

module.exports = model('Roles', RolesSchema);