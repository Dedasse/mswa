'use strict';
const express = require('express');
const router = express.Router();
const passport = require('../utils/pass');
const admin = require('../utils/admin');
const {body, check} = require('express-validator');
const periodController = require('../controllers/periodController');





router.get('/', periodController.period_list_get);

router.get('/:id', periodController.period_get);

router.post('/', periodController.period_post);

router.put('/',[passport.authenticate('jwt', {session: false}),admin], periodController.period_put);

router.delete('/:id',[passport.authenticate('jwt', {session: false}),admin], periodController.period_delete);

module.exports = router;