const { Router } = require('express');
const gradesCtrl = require('../controllers/users.js');

const router = Router();

router.post('/', gradesCtrl.createUser);

module.exports = router;
