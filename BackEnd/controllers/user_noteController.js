'use strict';
const courseModel = require('../models/user_noteModel');

const {validationResult} = require('express-validator');


//const user_note = user_noteModel.cat;

const user_note_list_get = async (req, res) => {
  const user_notes = await user_noteModel.getAlluser_notes();
  res.json(user_notes);
};

const user_note_get = async (req, res) => {
  console.log('user_note id parameter', req.params);
  const user_note = await user_noteModel.getuser_note(req.params.id);
  res.json(user_note);
};


const user_note_post = async (req, res) => {
  console.log('user_post', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const params = [
      req.body.user_note_id,
      req.body.name
    ];
    const user = await user_noteModel.insertuser_note(params);
    console.log('inserted!!!', user);
    res.send(`added user: ${user.user_note_id}`);
  } catch (e) {
    console.error('problem with user_post in userController', e);
    res.status(500).send(`database insert error: ${e.message}`);
  }
};


const  user_note_put = async (req, res) => {
  console.log('user_note_put',req.body);
  const upuser_note = await user_noteModel.updateuser_note(req.body);
  console.log('user_note_put result from db', upuser_note);
  res.status(204).send();
};

const user_note_delete = async (req, res) => {
  console.log('user_note_delete', req.parms);
  const deluser_note = await user_noteModel.deleteuser_note(req.params.id);
  console.log('user_delete result from db', delUser);
  res.json({ deleted: 'OK' });
};

module.exports = {
  user_note_list_get,
  user_note_get,
  user_note_post,
  user_note_put,
  user_note_delete
};
