'use strict';
const teacherModel = require('../models/teacherModel');

const {validationResult} = require('express-validator');


//const teacher = teacherModel.cat;

const teacher_list_get = async (req, res) => {
  const teachers = await teacherModel.getAllteachers();
  res.json(teachers);
};

const teacher_get = async (req, res) => {
  console.log('teacher id parameter', req.params);
  const teacher = await teacherModel.getteacher(req.params.id);
  res.json(teacher);
};


const teacher_post = async (req, res) => {
  console.log('user_post', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const params = [
      req.body.teacher_id,
      req.body.name,
      req.body.picture
    ];
    const user = await teacherModel.insertteacher(params);
    console.log('inserted!!!', user);
    res.send(`added user: ${user.teacher_id}`);
  } catch (e) {
    console.error('problem with user_post in userController', e);
    res.status(500).send(`database insert error: ${e.message}`);
  }
};


const  teacher_put = async (req, res) => {
  console.log('teacher_put',req.body);
  const upteacher = await teacherModel.updateteacher(req.body);
  console.log('teacher_put result from db', upteacher);
  res.status(204).send();
};

const teacher_delete = async (req, res) => {
  console.log('teacher_delete', req.parms);
  const delteacher = await teacherModel.deleteteacher(req.params.id);
  console.log('user_delete result from db', delUser);
  res.json({ deleted: 'OK' });
};

module.exports = {
  teacher_list_get,
  teacher_get,
  teacher_post,
  teacher_put,
  teacher_delete
};




