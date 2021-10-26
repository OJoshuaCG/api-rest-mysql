const express = require('express');
const router = express.Router();

const controladorPersonas = require(
    '../controladores/controladorPersonas');

router.get('/', controladorPersonas.list);
router.post('/add', controladorPersonas.save);
router.get('/delete/:CodPersona', controladorPersonas.delete);

router.get('/update/:CodPersona', controladorPersonas.edit);
router.post('/update/:CodPersona', controladorPersonas.update);

module.exports = router;