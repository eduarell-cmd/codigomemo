const express = require('express')
const router = express.Router()

const contadorController = require('../controllers/ContadorController')

router.get('/contador', contadorController.getContador)
router.get('/incrementar', contadorController.incrementarContador)

module.exports = router;
