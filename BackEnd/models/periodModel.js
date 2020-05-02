'use strict';
//const pool = require('../database/db');
const promisePool = require('../database/db').promise();

const getAllPeriods = async () => {
  try {
    const [rows] = await promisePool.query('SELECT      period_id,periods.name  FROM periods ');
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