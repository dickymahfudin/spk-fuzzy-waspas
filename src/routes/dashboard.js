const express = require('express');
const router = express.Router();
const jsonToTable = require('../helpers/jsonToTable');
const { bread, kriteria, user } = require('../models');

router.get('/', async (req, res, next) => {
  let date = '2023-01-23';
  if (req.query.date) date = req.query.date;
  let status = true;
  const waspas = await bread.findAll({
    where: {
      tgl_produksi: date,
    },
    order: [['result', 'DESC']],
  });
  if (waspas.length == 0) status = false;
  const kriterias = await kriteria.findAll();
  waspas.forEach(el => {
    if (!el.result) status = false;
  });
  res.render('dashboard', { title: 'Dashboard', status, kriterias, waspas, date });
});

module.exports = router;
