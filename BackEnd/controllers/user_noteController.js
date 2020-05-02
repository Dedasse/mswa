'use strict';
const usernoteModel = require('../models/user_noteModel');

const {validationResult} = require('express-validator');


//const user_note = user_noteModel.cat;

const user_note_list_get = async (req, res) => {
  const usernotes = await usernoteModel.getAlluser_notes();
  res.json(usernotes);
};

const user_note_get = async (req, res) => {
  console.log('user_note id parameter', req.params);
  const usernote = await usernoteModel.getuser_note(req.params.id);
  res.json(usernote);
};


const user_note_post = async (req, res) => {
  console.log('user_post', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const params = [
      req.body.who_id,
      req.body.where_id,
      req.body.message
    ];
    const user = await usernoteModel.insertuser_note(params);
    console.log('inserted!!!', user);
    res.send(`added user: ${user.user_note_id}`);
  } catch (e) {
    console.error('problem with user_post in userController', e);
    res.status(500).send(`database insert error: ${e.message}`);
  }
};


const  user_note_put = async (req, res) => {
  console.log('user_note_put',req.body);
  const upuser_note = await usernoteModel.updateuser_note(req.body);
  console.log('user_note_put result from db', upuser_note);
  res.status(204).send();
};

const user_note_delete = async (req, res) => {
  console.log('user_note_delete', req.parms);
  const delUser = await usernoteModel.deleteuser_note(req.params.id);
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
