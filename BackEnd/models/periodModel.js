'use strict';
//const pool = require('../database/db');
const promisePool = require('../database/db').promise();

const getAllPeriods = async () => {
  try {
    const [rows] = await promisePool.query('SELECT periods.period_id as opinto_id,periods.name as Period_name,courses.name as course_name, teachers.name as teacher_name,course_infos.information as course_info,teachers.picture as teacher_photo FROM periods INNER JOIN courses ON courses.fk_period_id = periods.period_id INNER JOIN teachers ON teachers.teacher_id = courses.fk_teacher_id INNER JOIN course_infos ON course_infos.info_id = courses.course_id ');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};



const getPeriod = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT periods.name FROM periods  WHERE  period_id = ? ' , [ id ]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertPeriod = async (user) => {
  try {
    console.log('insert period?', user);
    
    const [rows] = await promisePool.query('INSERT INTO periods (period_id, name) VALUES (?, ?)',user);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const updatePeriod = async (user) => {
  try {
    console.log('insert PERiod?', user);
    const [rows] = await promisePool.query('UPDATE periods SET name = ? WHERE periods.period_id = ?', [ user.name, user.period_id ]);
    
    return rows;
  } catch (e) {
    console.error('updateUser model crash', e.message);
  }
};

const deletePeriod = async (id) => {
  try {
    console.log('delete period    ', id);
    const [rows] = await promisePool.query('DELETE FROM periods WHERE periods.period_id = ?', [ id ]);
    console.log('deleted?', rows);
    return rows;
  } catch (e) {
    console.error('deletePeriod model', e.message);
  }
}




module.exports ={
  getAllPeriods,
  getPeriod,
  insertPeriod,
  updatePeriod,
  deletePeriod
};