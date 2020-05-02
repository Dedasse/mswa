'use strict';
// courseRoute
const express = require('express');
const router = express.Router();
const passport = require('../utils/pass');
const admin = require('../utils/admin');
const {body, check} = require('express-validator');
const teacherController = require('../controllers/teacherController');

router.get('/', teacherController.teacher_list_get);

router.get('/:id', teacherController.teacher_get);

router.post('/', teacherController.teacher_post);

router.put('/',[passport.authenticate('jwt', {session: false}),admin], teacherController.teacher_put);

router.delete('/:id',[passport.authenticate('jwt', {session: false}),admin], teacherController.teacher_delete);

module.exports =router;