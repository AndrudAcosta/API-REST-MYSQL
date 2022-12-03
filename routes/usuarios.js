const {Router} = require('express')
const router = Router()

const { getUsuarios, postUsuarios, deleteUsuarios, putUsuarios} = require('../controller/usuarios')

router.get('/',getUsuarios)
router.post('/',postUsuarios)
router.delete('/',deleteUsuarios)
router.put('/',putUsuarios)




module.exports = router