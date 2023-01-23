const express = require('express');
const router = express.Router();
const group = require('../helpers/group');
const jsonToTable = require('../helpers/jsonToTable');
const dataFormat = require('../helpers/dataFormat');
const { bread, kriteria, link } = require('../models');

router.get('/', async (req, res, next) => {
  const username = req.session.username;
  const kriterias = await kriteria.getAll();
  return res.render('bread/index', { title: 'Roti', username, kriterias });
});

router.get('/table', async (req, res, next) => {
  try {
    const locations = await link.getAll();
    const tempData = group(locations, 'bread_id');
    const data = dataFormat(tempData);
    return res.status(200).json(jsonToTable(data));
  } catch (error) {
    return res.json([]);
  }
});

router.post('/', async (req, res, next) => {
  const data = req.body;
  const tempLocation = await bread.findOne({
    where: {
      name: data.name,
    },
  });
  if (tempLocation) {
    req.flash('error', 'Nama Lokasi Tidak Boleh Sama');
    return res.redirect('/bread');
  }
  const location = await bread.create({ name: data.name, alamat: data.alamat, contact: data.contact });
  for (const value of Object.keys(data)) {
    if (value != 'name' && value != 'alamat' && value != 'contact') {
      await link.create({
        kriteria_id: value,
        bread_id: location.id,
        value: data[value],
      });
    }
  }
  req.flash('success', 'Data Berhasil Ditambahkan');
  return res.redirect('/bread');
});

router.post('/:id', async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  const tempbread = await bread.findOne({ where: { id }, raw: true, nest: true });
  console.log(tempbread);
  if (tempbread) {
    bread.update({ name: data.name }, { where: { id } });
  }
  for (const value of Object.keys(data)) {
    if (value != 'name') {
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
  return res.redirect('/bread');
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
  return res.render('bread/form', {
    action: `/bread/${id}`,
    forms,
    name,
    title: 'Roti',
  });
});

module.exports = router;
