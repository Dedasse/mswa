'use strict';
const periodModel = require('../models/periodModel');
const {validationResult} = require('express-validator');


//const period = periodModel.cat;

const period_list_get = async (req, res) => {
  const periods = await periodModel.getAllPeriods();
  res.json(periods);
};

const period_get = async (req, res) => {
  console.log('period id parameter', req.params);
  const period = await periodModel.getperiod(req.params.id);
  res.json(period);
};


const period_post = async (req, res) => {
  console.log('user_post', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const params = [
      req.body.period_id,
      req.body.name
    ];
    const user = await periodModel.insertPeriod(params);
    console.log('inserted!!!', user);
    res.send(`added user: ${user.period_id}`);
  } catch (e) {
    console.error('problem with user_post in userController', e);
    res.status(500).send(`database insert error: ${e.message}`);
  }
};


const  period_put = async (req, res) => {
  console.log('period_put',req.body);
  const upPeriod = await periodModel.updatePeriod(req.body);
  console.log('period_put result from db', upPeriod);
  res.status(204).send();
};

const period_delete = async (req, res) => {
  console.log('period_delete', req.parms);
  const delPeriod = await periodModel.deletePeriod(req.params.id);
  console.log('user_delete result from db', delUser);
  res.json({ deleted: 'OK' });
};

module.exports = {
  period_list_get,
  period_get,
  period_post,
  period_put,
  period_delete
};