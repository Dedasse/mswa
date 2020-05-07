'use strict';
//const pool = require('../database/db');
const promisePool = require('../database/db').promise();

const getAllcourseinfos = async () => {
  try {
    const [rows] = await promisePool.query('SELECT      info_id,name,information  FROM course_infos ');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};



const getcourseinfo = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT name,information FROM course_infos  WHERE  info_id = ? ' , [ id ]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertcourseinfo = async (user) => {
  try {
    console.log('insert courseinfo?', user);
    
    const [rows] = await promisePool.query('INSERT INTO course_infos (info_id,fk_course_id, name, information) VALUES (?, ?, ?, ?)',user);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const updatecourseinfo = async (user) => {
  try {
    console.log('insert courseinfo?', user);
    const [rows] = await promisePool.query('UPDATE course_infos SET fk_course_id = ?, name = ?,information = ? WHERE course_infos.info_id = ?', [ user.fk_course_id,user.name,user.information, user.info_id ]);
    
    return rows;
  } catch (e) {
    console.error('updateUser model crash', e.message);
  }
};

const deletecourseinfo = async (id) => {
  try {
    console.log('delete courseinfo    ', id);
    const [rows] = await promisePool.query('DELETE FROM course_infos WHERE course_infos.info_id = ?', [ id ]);
    console.log('deleted?', rows);
    return rows;
  } catch (e) {
    console.error('deletecourseinfo model', e.message);
  }
}




module.exports ={
  getAllcourseinfos,
  getcourseinfo,
  insertcourseinfo,
  updatecourseinfo,
  deletecourseinfo
};