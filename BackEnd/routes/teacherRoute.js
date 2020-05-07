'use strict';
// courseRoute
const express = require('express');
const router = express.Router();
const passport = require('../utils/pass');
const admin = require('../utils/admin');
const {body, check} = require('express-validator');
const multer = require('multer');
const upload = multer({dest: './uploads/', fileFilter});
const teacherController = require('../controllers/teacherController');

function fileFilter(req, file, cb) {
  console.log('filefilter', file);
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted

  // To reject this file pass `false`, like so:
  if (!file.mimetype.includes('image')) {
    return cb(null, false, new Error('I don\'t have a clue!'));
  } else {
    // To accept the file pass `true`, like so:
    cb(null, true);
  }
};

router.get('/', teacherController.teacher_list_get);

router.get('/:id', teacherController.teacher_get);

//router.post('/', teacherController.teacher_post);
router.post('/',
    upload.single('picture'),
    [
      body('name', 'cannot be empty').isLength({min: 1}),
      check('picture').custom(teacherController.teacher_file_validator), // file_validator checks only req.file
    ], (req, res) => {
      console.log('picture: ', req.file);
      teacherController.teacher_post(req, res);
      //res.send('With this endpoint you can add cats');
    });

router.put('/',[passport.authenticate('jwt', {session: false}),admin], teacherController.teacher_put); //only for admin

router.delete('/:id',[passport.authenticate('jwt', {session: false}),admin], teacherController.teacher_delete);// only for admin

module.exports =router;