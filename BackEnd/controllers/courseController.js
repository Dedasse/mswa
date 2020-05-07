'use strict';
const courseModel = require('../models/courseModel');
const {validationResult} = require('express-validator');


//const course = courseModel.cat;

const course_list_get = async (req, res) => {
  const courses = await courseModel.getAllcourses();
  res.json(courses);
};

const course_get = async (req, res) => {
  console.log('course id parameter', req.params);
  const course = await courseModel.getcourse(req.params.id);
  res.json(course);
};


const course_post = async (req, res) => {
  console.log('course_post', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const params = [
      req.body.course_id,
      req.body.fk_period_id,
      req.body.name,
      req.body.fk_teacher_id
    ];
    const user = await courseModel.insertcourse(params);
    console.log('inserted!!!', user);
    res.send(`added course`);
  } catch (e) {
    console.error('problem with user_post in userController', e);
    res.status(500).send(`database insert error: ${e.message}`);
  }
};


const  course_put = async (req, res) => {
  console.log('course_put',req.body);
  const upcourse = await courseModel.updatecourse(req.body);
  console.log('course_put result from db', upcourse);
  res.status(204).send();
};

const course_delete = async (req, res) => {
  console.log('course_delete', req.parms);
  const delcourse = await courseModel.deletecourse(req.params.id);
  console.log('user_delete result from db', delcourse);
  res.json({ deleted: 'OK' });
};

module.exports = {
  course_list_get,
  course_get,
  course_post,
  course_put,
  course_delete
};


