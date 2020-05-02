'use strict';
// courseRoute
const express = require('express');
const router = express.Router();
const passport = require('../utils/pass');
const admin = require('../utils/admin');
const {body, check} = require('express-validator');
const user_noteController = require('../controllers/user_noteController');

router.get('/', user_noteController.user_note_list_get);

router.get('/:id', user_noteController.user_note_get);

router.post('/', user_noteController.user_note_post);

router.put('/',[passport.authenticate('jwt', {session: false}),admin], user_noteController.user_note_put);

router.delete('/:id',[passport.authenticate('jwt', {session: false}),admin], user_noteController.user_note_delete);

module.exports = router;

