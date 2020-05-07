'use strict';
//const pool = require('../database/db');
const promisePool = require('../database/db').promise();

const getAlluser_notes = async () => {
  try {
    const [rows] = await promisePool.query('SELECT users.name,course_infos.name,user_notes.message FROM user_notes INNER JOIN users ON users.user_id = user_notes.who_id INNER JOIN course_infos ON course_infos.info_id = user_notes.where_to');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};



const getuser_note = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT users.name,course_infos.name,user_notes.message FROM user_notes INNER JOIN users ON users.user_id = user_notes.who_id INNER JOIN course_infos ON course_infos.info_id = user_notes.where_to WHERE where_to = ? ' , [ id ]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertuser_note = async (user) => {
  try {
    console.log('insert user_note?', user);
    
    const [rows] = await promisePool.query('INSERT INTO user_notes (who_id, where_to, message) VALUES (?, ?, ?)',user);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const updateuser_note = async (user) => {
  try {
    console.log('insert user_note?', user);
    const [rows] = await promisePool.query('UPDATE user_notes SET  where_id = ?, message = ? WHERE user_notes.who_id = ?', [ user.who_id, user.where_to,user.message ]);
    
    return rows;
  } catch (e) {
    console.error('updateUser model crash', e.message);
  }
};

const deleteuser_note = async (id) => {
  try {
    console.log('delete user_note    ', id);
    const [rows] = await promisePool.query('DELETE FROM user_notes WHERE user_notes.note_id = ?', [ id ]);
    console.log('deleted?', rows);
    return rows;
  } catch (e) {
    console.error('deleteuser_note model', e.message);
  }
}




module.exports ={
  getAlluser_notes,
  getuser_note,
  insertuser_note,
  updateuser_note,
  deleteuser_note
};


