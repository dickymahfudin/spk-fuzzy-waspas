const express = require('express');
const router = express.Router();
const { bread, kriteria, link } = require('../models');
const dataLaporan = require('../helpers/dataLaporan');

router.get('/', (req, res, next) => res.render('setting', { title: 'Setting' }));

router.get('/destroy', async (req, res, next) => {
  await bread.destroy({ where: {} });
  // await kriteria.destroy({ where: {} });
  await link.destroy({ where: {} });
  return res.redirect('/');
});

router.get('/add', async (req, res, next) => {
  try {
    await bread.destroy({ where: {} });
    // await kriteria.destroy({ where: {} });
    await link.destroy({ where: {} });
    await dataLaporan();
    return res.redirect('/rumus/hitung');
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
