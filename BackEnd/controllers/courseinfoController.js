'use strict';
const courseinfoModel = require('../models/courseinfoModel');
const {validationResult} = require('express-validator');


//const courseinfo = courseinfoModel.cat;

const courseinfo_list_get = async (req, res) => {
  const courseinfos = await courseinfoModel.getAllcourseinfos();
  res.json(courseinfos);
};

const courseinfo_get = async (req, res) => {
  console.log('courseinfo id parameter', req.params);
  const courseinfo = await courseinfoModel.getcourseinfo(req.params.id);
  res.json(courseinfo);
};


const courseinfo_post = async (req, res) => {
  console.log('user_post', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const params = [
      req.body.info_id,
      req.body.fk_course_id,
      req.body.name,
      req.body.information
    ];
    const user = await courseinfoModel.insertcourseinfo(params);
    console.log('inserted!!!', user);
    res.send(`added info`);
  } catch (e) {
    console.error('problem with user_post in userController', e);
    res.status(500).send(`database insert error: ${e.message}`);
  }
};


const  courseinfo_put = async (req, res) => {
  console.log('courseinfo_put',req.body);
  const upcourseinfo = await courseinfoModel.updatecourseinfo(req.body);
  console.log('courseinfo_put result from db', upcourseinfo);
  res.status(204).send();
};

const courseinfo_delete = async (req, res) => {
  console.log('courseinfo_delete', req.parms);
  const delUser = await courseinfoModel.deletecourseinfo(req.params.id);
  console.log('user_delete result from db', delUser);
  res.json({ deleted: 'OK' });
};

module.exports = {
  courseinfo_list_get,
  courseinfo_get,
  courseinfo_post,
  courseinfo_put,
  courseinfo_delete
};