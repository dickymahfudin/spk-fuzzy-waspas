const models = require('../models');

const criterias = async () => {
  const createdAt = new Date();
  const updatedAt = new Date();
  const tglProduksi1 = '2023-01-23';
  const tglProduksi2 = '2023-01-24';

  const dataBreads = [
    { name: 'Roti Unyil Coklat', result: 1.58, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Keju', result: 1.53, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Cokelat Keju', result: 1.1, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Jagung Manis', result: 1.08, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Oreo', result: 1.15, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Durian', result: 0.73, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Pisang Cokelat', result: 1.1, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Pisang Keju', result: 1.14, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Sosis', result: 1.08, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Abon', result: 1.12, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Cream Cheese', result: 1.18, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Daging Asap', result: 1.82, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Mocca Cokelat', result: 1.15, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Korean Garlic', result: 0.79, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Coffee Bun', result: 1.06, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Abon', result: 1.26, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Cream Cheese', result: 1.48, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Sosis', result: 1.78, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Flower Sausage Bread', result: 1.01, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Naugat Kacang', result: 0.83, tgl_produksi: tglProduksi1 },

    { name: 'Roti Unyil Coklat', result: 1.36, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Keju', result: 1.15, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Cokelat Keju', result: 1.19, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Jagung Manis', result: 1.2, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Oreo', result: 1.7, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Durian', result: 1.58, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Pisang Cokelat', result: 1.48, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Pisang Keju', result: 1.19, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Sosis', result: 1.92, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Abon', result: 1.42, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Cream Cheese', result: 1.29, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Daging Asap', result: 1.37, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Mocca Cokelat', result: 1.85, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Korean Garlic', result: 1.45, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Coffee Bun', result: 1.7, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Abon', result: 1.68, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Cream Cheese', result: 1.38, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Sosis', result: 1.68, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Flower Sausage Bread', result: 1.45, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Naugat Kacang', result: 1.44, tgl_produksi: tglProduksi2 },
  ];

  const valueLink = [
    [270, 350, 187],
    [180, 300, 236],
    [150, 150, 66],
    [120, 150, 68],
    [150, 200, 66],
    [120, 100, 0],
    [150, 155, 66],
    [180, 175, 64],
    [210, 125, 53],
    [150, 170, 66],
    [240, 200, 50],
    [180, 450, 375],
    [150, 200, 66],
    [200, 100, 0],
    [261, 110, 42],
    [360, 270, 25],
    [405, 432, 36],
    [234, 495, 264],
    [414, 189, 1],
    [261, 100, 0],

    [107, 210, 136],
    [116, 140, 69],
    [166, 122, 68],
    [138, 148, 67],
    [116, 340, 283],
    [120, 300, 209],
    [161, 250, 144],
    [169, 110, 69],
    [138, 431, 369],
    [146, 234, 130],
    [190, 179, 64],
    [105, 220, 136],
    [116, 410, 358],
    [200, 230, 109],
    [193, 300, 242],
    [115, 320, 282],
    [109, 220, 137],
    [103, 345, 277],
    [226, 243, 97],
    [161, 240, 126],
  ];
  const kriterias = await models.kriteria.findAll();
  const breads = await models.bread.bulkCreate(dataBreads);

  for (const i in breads) {
    if (Object.hasOwnProperty.call(breads, i)) {
      const location = breads[i];
      for (const j in kriterias) {
        if (Object.hasOwnProperty.call(kriterias, j)) {
          const criteria = kriterias[j];
          await models.link.create({
            bread_id: location.id,
            kriteria_id: criteria.id,
            value: valueLink[i][j],
          });
        }
      }
    }
  }
  return { status: 'success' };
};

module.exports = criterias;
