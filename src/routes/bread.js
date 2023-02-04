const express = require('express');
const router = express.Router();
const group = require('../helpers/group');
const jsonToTable = require('../helpers/jsonToTable');
const dataFormat = require('../helpers/dataFormat');
const { bread, kriteria, link } = require('../models');

router.get('/', async (req, res, next) => {
  let date = '2023-01-23';
  if (req.query.date) date = req.query.date;
  let url = '/bread/table';
  if (date) url = `${url}?date=${date}`;
  const username = req.session.username;
  const kriterias = await kriteria.getAll();
  return res.render('bread/index', { title: 'Roti', username, kriterias, url, date });
});

router.get('/table', async (req, res, next) => {
  try {
    let date = '2023-01-23';
    if (req.query.date) date = req.query.date;
    const locations = await link.getAll([], date);
    const tempData = group(locations, 'bread_id');
    let data = dataFormat(tempData);
    data = data.reverse();
    return res.status(200).json(jsonToTable(data));
  } catch (error) {
    return res.json(error);
  }
});

router.post('/', async (req, res, next) => {
  const data = req.body;
  const tempLocation = await bread.findOne({
    where: {
      name: data.name,
      tgl_produksi: data.date,
    },
  });
  if (tempLocation) {
    req.flash('error', 'Nama Roti Sudah tersedia');
    return res.redirect(`/bread?date=${data.date}`);
  }
  const location = await bread.create({ name: data.name, tgl_produksi: data.date });
  for (const value of Object.keys(data)) {
    if (value != 'name' && value != 'alamat' && value != 'date') {
      await link.create({
        kriteria_id: value,
        bread_id: location.id,
        value: data[value],
      });
    }
  }
  req.flash('success', 'Data Berhasil Ditambahkan');
  return res.redirect(`/bread?date=${data.date}`);
});

router.post('/:id', async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  const tempbread = await bread.findOne({ where: { id }, raw: true, nest: true });
  if (tempbread) {
    bread.update({ name: data.name, tgl_produksi: data.date }, { where: { id } });
  }
  for (const value of Object.keys(data)) {
    if (value != 'name' && value != 'date') {
      await link.update(
        {
          kriteria_id: value,
          bread_id: tempbread.id,
          value: data[value],
        },
        {
          where: {
            kriteria_id: value,
            bread_id: tempbread.id,
          },
        }
      );
    }
  }
  req.flash('success', 'Data Berhasil Diubah');
  return res.redirect(`/bread?date=${data.date}`);
});

router.get('/delete/:id', async (req, res, next) => {
  const id = req.params.id;
  const tempLocation = await bread.findByPk(id);
  await tempLocation.destroy();
  req.flash('success', 'Data Berhasil Dihapus');
  return res.redirect('/bread');
});

router.get('/form', async (req, res, next) => {
  const forms = await kriteria.getAll(true);

  return res.render('bread/form', {
    action: '/bread',
    forms,
    name: '',
    tgl: '2023-01-23',
    title: 'Roti',
  });
});

router.get('/form/:id', async (req, res, next) => {
  const { id } = req.params;
  const kriterias = await kriteria.getAll(true);
  const tempForms = await link.getAll({ bread_id: id });
  const name = tempForms[0]['bread']['name'];
  const forms = kriterias.map(kriteria => {
    const passkriteria = kriteria.dataValues;
    const find = tempForms.find(asli => asli.kriteria_id == kriteria.id) || '';
    return { ...passkriteria, value: find.value };
  });
  const tgl = tempForms[0]['bread']['tgl_produksi'];
  return res.render('bread/form', {
    action: `/bread/${id}`,
    forms,
    name,
    tgl,
    title: 'Roti',
  });
});

router.get('/sisa', async (req, res, next) => {
  try {
    const date = req.query.date;
    const name = req.query.name;
    const locations = await link.getAll([], date);
    const tempData = group(locations, 'bread_id');
    let data = dataFormat(tempData);
    data = data.find(e => e.name == name);
    let sisa = 101;
    if (data) {
      sisa = data.Persediaan + data.Produksi - data.Pesanan;
      sisa = sisa < 101 ? sisa + 100 : sisa;
    }
    return res.status(200).json(sisa);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
