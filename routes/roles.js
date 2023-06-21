const {Router} = require('express')

const route = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{rolesGet,rolesPost,rolesPut,rolesDelete}=require('../controllers/roles')
route.get('/', rolesGet)
route.post('/', rolesPost )
route.put('/', rolesPut )
route.delete('/', rolesDelete )



module.exports = route