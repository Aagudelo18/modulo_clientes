const { Schema, model } = require('mongoose');

const RolesSchema = Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  permisos: [{
    type: String
  }]
});

module.exports = model('Roles', RolesSchema);