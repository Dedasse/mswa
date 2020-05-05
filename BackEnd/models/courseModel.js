'use strict';
//const pool = require('../database/db');
const promisePool = require('../database/db').promise();

const getAllcourses = async () => {
  try {
    const [rows] = await promisePool.query('SELECT *  FROM courses ');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};



const getcourse = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT periods.period_id, courses.name FROM courses INNER JOIN periods ON period_id=fk_period_id WHERE  fk_period_id = ? ' , [ id ]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertcourse = async (user) => {
  try {
    console.log('insert course?', user);
    
    const [rows] = await promisePool.query('INSERT INTO courses (course_id,fk_period_id, name,fk_teacher_id) VALUES (?, ?, ?, ?)',user);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const updatecourse = async (user) => {
  try {
    console.log('insert course?', user);
    const [rows] = await promisePool.query('UPDATE courses SET name = ?, fk_period_id = ?, fk_teacher_id = ? WHERE courses.course_id = ?', [ user.name,user.fk_period_id,user.fk_teacher_id, user.course_id ]);
    
    return rows;
  } catch (e) {
    console.error('updateUser model crash', e.message);
  }
};

const deletecourse = async (id) => {
  try {
    console.log('delete course    ', id);
    const [rows] = await promisePool.query('DELETE FROM courses WHERE courses.course_id = ?', [ id ]);
    console.log('deleted?', rows);
    return rows;
  } catch (e) {
    console.error('deletecourse model', e.message);
  }
}




module.exports ={
  getAllcourses,
  getcourse,
  insertcourse,
  updatecourse,
  deletecourse
};



