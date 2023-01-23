const express = require('express');
const router = express.Router();
const jsonToTable = require('../helpers/jsonToTable');
const { bread, kriteria, user } = require('../models');

router.get('/', async (req, res, next) => {
  let status = true;
  const waspas = await bread.findAll({
    order: [['result', 'DESC']],
  });
  if (waspas.length == 0) status = false;
  const kriterias = await kriteria.findAll();
  waspas.forEach(el => {
    if (!el.result) status = false;
  });
  res.render('dashboard', { title: 'Dashboard', status, kriterias, waspas });
});

module.exports = router;
