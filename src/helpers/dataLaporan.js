const models = require('../models');

const criterias = async () => {
  const createdAt = new Date();
  const updatedAt = new Date();
  const tglProduksi1 = '2023-01-23';
  const tglProduksi2 = '2023-01-24';

  const dataBreads = [
    { name: 'Roti Unyil Coklat', result: 1.56, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Keju', result: 1.5, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Cokelat Keju', result: 1.09, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Jagung Manis', result: 1.06, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Oreo', result: 1.14, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Durian', result: 0.73, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Pisang Cokelat', result: 1.09, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Pisang Keju', result: 1.13, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Sosis', result: 1.07, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Abon', result: 1.11, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Cream Cheese', result: 1.18, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Daging Asap', result: 1.82, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Mocca Cokelat', result: 1.14, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Korean Garlic', result: 0.79, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Coffee Bun', result: 1.06, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Abon', result: 1.25, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Cream Cheese', result: 1.45, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Sosis', result: 1.77, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Flower Sausage Bread', result: 1.01, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Naugat Kacang', result: 0.83, tgl_produksi: tglProduksi1 },

    { name: 'Roti Unyil Coklat', result: 1.32, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Keju', result: 1.14, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Cokelat Keju', result: 1.17, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Jagung Manis', result: 1.18, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Oreo', result: 1.68, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Durian', result: 1.55, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Pisang Cokelat', result: 1.45, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Pisang Keju', result: 1.16, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Sosis', result: 1.92, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Abon', result: 1.4, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Cream Cheese', result: 1.27, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Daging Asap', result: 1.35, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Mocca Cokelat', result: 1.85, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Korean Garlic', result: 1.41, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Coffee Bun', result: 1.66, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Abon', result: 1.66, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Cream Cheese', result: 1.35, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Sosis', result: 1.7, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Flower Sausage Bread', result: 1.44, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Naugat Kacang', result: 1.41, tgl_produksi: tglProduksi2 },
  ];

  const valueLink = [
    [270, 350, 196],
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
    [180, 450, 424],
    [150, 200, 66],
    [200, 100, 0],
    [261, 110, 42],
    [360, 270, 25],
    [405, 432, 36],
    [234, 495, 288],
    [414, 189, 1],
    [261, 100, 0],

    [116, 210, 121],
    [116, 140, 69],
    [166, 122, 68],
    [138, 148, 67],
    [116, 340, 307],
    [120, 300, 209],
    [161, 250, 144],
    [169, 110, 69],
    [138, 431, 418],
    [146, 234, 130],
    [190, 179, 64],
    [154, 220, 104],
    [116, 410, 407],
    [200, 230, 109],
    [193, 300, 242],
    [115, 320, 307],
    [109, 220, 137],
    [127, 345, 312],
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
