'use strict';
// courseRoute
const express = require('express');
const router = express.Router();
const passport = require('../utils/pass');
const admin = require('../utils/admin');
const {body, check} = require('express-validator');
const course_infoController = require('../controllers/course_infoController');



router.get('/', course_infoController.course_info_list_get);

router.get('/:id', course_infoController.course_info_get);

router.post('/', course_infoController.course_info_post);

router.put('/',[passport.authenticate('jwt', {session: false}),admin], course_infoController.course_info_put);

router.delete('/:id',[passport.authenticate('jwt', {session: false}),admin], course_infoController.course_info_delete);



module.exports =router;