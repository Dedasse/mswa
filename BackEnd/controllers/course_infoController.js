'use strict';
const course_infoModel = require('../models/course_infoModel');

//const course_info = course_infoModel.cat;

const course_info_list_get = async (req, res) => {
  const course_infos = await course_infoModel.getAllcourse_infos();
  res.json(course_infos);
};

const course_info_get = async (req, res) => {
  console.log('course_info id parameter', req.params);
  const course_info = await course_infoModel.getcourse_info(req.params.id);
  res.json(course_info);
};


const course_info_post = async (req, res) => {
  console.log('user_post', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const params = [
      req.body.course_info_id,
      req.body.name
    ];
    const user = await course_infoModel.insertcourse_info(params);
    console.log('inserted!!!', user);
    res.send(`added user: ${user.course_info_id}`);
  } catch (e) {
    console.error('problem with user_post in userController', e);
    res.status(500).send(`database insert error: ${e.message}`);
  }
};


const  course_info_put = async (req, res) => {
  console.log('course_info_put',req.body);
  const upcourse_info = await course_infoModel.updatecourse_info(req.body);
  console.log('course_info_put result from db', upcourse_info);
  res.status(204).send();
};

const course_info_delete = async (req, res) => {
  console.log('course_info_delete', req.parms);
  const delcourse_info = await course_infoModel.deletecourse_info(req.params.id);
  console.log('user_delete result from db', delUser);
  res.json({ deleted: 'OK' });
};

module.exports = {
  course_info_list_get,
  course_info_get,
  course_info_post,
  course_info_put,
  course_info_delete
};

