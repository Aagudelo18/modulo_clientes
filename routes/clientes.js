const {Router} = require('express')

const route = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{clientesGet,clientesPost,clientesPut, clientesDelete}=require('../controllers/clientes')
route.get('/', clientesGet)
route.post('/', clientesPost )
route.put('/', clientesPut )
route.delete('/', clientesDelete )


module.exports = route


