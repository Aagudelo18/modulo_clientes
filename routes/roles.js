const {Router} = require('express')

const routes = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{rolesGet,rolesPost,rolesPut,rolesDelete}=require('../controllers/roles')
routes.get('/', rolesGet)
routes.post('/', rolesPost )
routes.put('/', rolesPut )
routes.delete('/', rolesDelete )



module.exports = routes