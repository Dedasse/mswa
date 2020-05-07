'use strict';
//const pool = require('../database/db');
const promisePool = require('../database/db').promise();

const getAllteachers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT      teacher_id,teachers.name,teachers.picture  FROM teachers ');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};



const getteacher = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM teachers  WHERE  teacher_id = ? ' , [ id ]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertteacher = async (user) => {
  try {
    console.log('insert teacher?', user);
    
    const [rows] = await promisePool.query('INSERT INTO teachers (teacher_id, name,picture) VALUES (?, ?, ?)',user);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const updateteacher = async (user) => {
  try {
    console.log('insert teacher?', user);
    const [rows] = await promisePool.query('UPDATE teachers SET name = ? WHERE teachers.teacher_id = ?', [ user.name, user.filename, user.teacher_id ]);
    
    return rows;
  } catch (e) {
    console.error('updateUser model crash', e.message);
  }
};

const deleteteacher = async (id) => {
  try {
    console.log('delete teacher    ', id);
    const [rows] = await promisePool.query('DELETE FROM teachers WHERE teachers.teacher_id = ?', [ id ]);
    console.log('deleted?', rows);
    return rows;
  } catch (e) {
    console.error('deleteteacher model', e.message);
  }
}




module.exports ={
  getAllteachers,
  getteacher,
  insertteacher,
  updateteacher,
  deleteteacher
};


