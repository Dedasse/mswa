'use strict';
//const pool = require('../database/db');
const promisePool = require('../database/db').promise();

const getAllcourse_infos = async () => {
  try {
    const [rows] = await promisePool.query('SELECT      info_id,course_info.name, information  FROM course_info ');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};



const getcourse_info = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT course_info.information FROM course_info  WHERE  info_id = ? ' , [ id ]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertcourse_info = async (user) => {
  try {
    console.log('insert course_info?', user);
    
    const [rows] = await promisePool.query('INSERT INTO course_info (course_info_id, name) VALUES (?, ?)',user);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const updatecourse_info = async (user) => {
  try {
    console.log('insert course_info?', user);
    const [rows] = await promisePool.query('UPDATE course_info SET name = ? WHERE course_info.info_id = ?', [ user.name, user.course_info_id ]);
    
    return rows;
  } catch (e) {
    console.error('updateUser model crash', e.message);
  }
};

const deletecourse_info = async (id) => {
  try {
    console.log('delete course_info    ', id);
    const [rows] = await promisePool.query('DELETE FROM course_info WHERE course_info.info_id = ?', [ id ]);
    console.log('deleted?', rows);
    return rows;
  } catch (e) {
    console.error('deletecourse_info model', e.message);
  }
}




module.exports ={
  getAllcourse_infos,
  getcourse_info,
  insertcourse_info,
  updatecourse_info,
  deletecourse_info
};


module.exports = {

};