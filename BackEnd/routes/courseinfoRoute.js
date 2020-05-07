'use strict';
const express = require('express');
const router = express.Router();
const passport = require('../utils/pass');
const admin = require('../utils/admin');
const {body, check} = require('express-validator');
const courseinfoController = require('../controllers/courseinfoController');





router.get('/', courseinfoController.courseinfo_list_get);

router.get('/:id', courseinfoController.courseinfo_get);

router.post('/', courseinfoController.courseinfo_post);

router.put('/',[passport.authenticate('jwt', {session: false}),admin], courseinfoController.courseinfo_put);// only for admin

router.delete('/:id',[passport.authenticate('jwt', {session: false}),admin], courseinfoController.courseinfo_delete);// only for admin

module.exports = router;