const express = require('express');
const router = express.Router();

const controladorPersonas = require('../controladores/controladorPersonas');

router.get('/', controladorPersonas.list);
router.post('/add', controladorPersonas.save);

module.exports = router;