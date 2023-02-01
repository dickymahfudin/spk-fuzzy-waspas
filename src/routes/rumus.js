const express = require('express');
const router = express.Router();
const hitung = require('../helpers/hitung');
const group = require('../helpers/group');
const dataFormat = require('../helpers/dataFormat');
const { kriteria, link, bread, user } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    let date = '2023-01-23';
    if (req.query.date) date = req.query.date;
    const locations = await link.getAll([], date);
    const kriterias = await kriteria.findAll({ raw: true, nest: true });
    let status = true;

    const tempData = group(locations, 'bread_id');
    let waspas, fuzzy;
    const datas = dataFormat(tempData);
    if (locations.length > 1 && kriterias.length > 1) {
      const hitungs = hitung(datas, kriterias);
      waspas = hitungs.waspas;
      fuzzy = hitungs.fuzzy;
    }
    console.log(waspas.matrix1);
    if (!waspas || !fuzzy) status = false;
    return res.render('rumus', { title: 'Rumus', waspas, fuzzy, status, date });
  } catch (error) {
    const status = false;
    let fuzzy, waspas, date;
    return res.render('rumus', { title: 'Rumus', waspas, fuzzy, status, date });
  }
});

router.get('/hitung', async (req, res, next) => {
  const date = req.query.date;
  try {
    const locations = await link.getAll([], date);
    const kriterias = await kriteria.getAll();
    const produksiKriteria = kriterias.find(el => el.name == 'Produksi');

    const tempData = group(locations, 'bread_id');
    const datas = dataFormat(tempData);
    const hitungs = hitung(datas, kriterias);
    if (hitungs.waspas.hasil.length != 0) {
      let dbError = 0;
      hitungs.waspas.hasil.forEach(async db => {
        if (!db.q) {
          dbError++;
        } else {
          await bread.update({ result: db.q }, { where: { id: db.id } });
        }
      });
      hitungs.breads.forEach(async bread => {
        await link.create({
          bread_id: bread.id,
          kriteria_id: produksiKriteria.id,
          value: bread.Produksi,
        });
      });
      if (dbError > 1) {
        req.flash('error', 'Perhitungan Gagal Data bread Tidak Boleh Kosong');
        return res.redirect(`/bread?date=${date}`);
      }
      req.flash('success', 'Perhitungan Berhasil');
      return res.redirect(`/rumus?date=${date}`);
    }
    req.flash('error', 'Perhitungan Gagal Data bread Tidak Boleh Kosong');
    return res.redirect(`/bread?date=${date}`);
  } catch (error) {
    req.flash('error', 'Perhitungan Gagal Minimal 2 Data bread dan 2 Data kriteria');
    return res.redirect(`/bread?date=${date}`);
  }
});

router.get('/json', async (req, res, next) => {
  const locations = await link.getAll();
  const kriterias = await kriteria.getAll();

  const tempData = group(locations, 'bread_id');
  const datas = dataFormat(tempData);
  const hitungs = hitung(datas, kriterias);
  res.json(hitungs);
});
module.exports = router;
