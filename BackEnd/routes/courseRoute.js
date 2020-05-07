'use strict';
// courseRoute
const express = require('express');
const router = express.Router();
const passport = require('../utils/pass');
const admin = require('../utils/admin');
const {body, check} = require('express-validator');
const courseController = require('../controllers/courseController');


router.get('/', courseController.course_list_get);

router.get('/:id', courseController.course_get);

router.post('/', courseController.course_post);

router.put('/',[passport.authenticate('jwt', {session: false}),admin], courseController.course_put);//only for admin

router.delete('/:id',[passport.authenticate('jwt', {session: false}),admin], courseController.course_delete); //only for admin




module.exports =router;