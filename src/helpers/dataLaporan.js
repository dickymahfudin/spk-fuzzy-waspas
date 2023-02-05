const models = require('../models');

const criterias = async () => {
  const createdAt = new Date();
  const updatedAt = new Date();
  const tglProduksi1 = '2023-01-23';
  const tglProduksi2 = '2023-01-24';

  const dataBreads = [
    { name: 'Roti Unyil Coklat', result: 1.56, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Keju', result: 1.5, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Cokelat Keju', result: 1.14, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Jagung Manis', result: 1.12, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Oreo', result: 1.19, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Durian', result: 0.73, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Pisang Cokelat', result: 1.14, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Pisang Keju', result: 1.18, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Sosis', result: 1.1, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Abon', result: 1.17, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Cream Cheese', result: 1.2, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Daging Asap', result: 1.82, tgl_produksi: tglProduksi1 },
    { name: 'Roti Unyil Mocca Cokelat', result: 1.19, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Korean Garlic', result: 0.79, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Coffee Bun', result: 1.09, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Abon', result: 1.25, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Cream Cheese', result: 1.45, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Sosis', result: 1.77, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Flower Sausage Bread', result: 1.01, tgl_produksi: tglProduksi1 },
    { name: 'Roti Besar Naugat Kacang', result: 0.83, tgl_produksi: tglProduksi1 },

    { name: 'Roti Unyil Coklat', result: 1.35, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Keju', result: 1.19, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Cokelat Keju', result: 1.24, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Jagung Manis', result: 1.26, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Oreo', result: 1.72, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Durian', result: 1.55, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Pisang Cokelat', result: 1.5, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Pisang Keju', result: 1.23, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Sosis', result: 1.94, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Abon', result: 1.44, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Cream Cheese', result: 1.24, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Daging Asap', result: 1.38, tgl_produksi: tglProduksi2 },
    { name: 'Roti Unyil Mocca Cokelat', result: 1.91, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Korean Garlic', result: 1.45, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Coffee Bun', result: 1.65, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Abon', result: 1.66, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Cream Cheese', result: 1.36, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Sosis', result: 1.7, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Flower Sausage Bread', result: 1.44, tgl_produksi: tglProduksi2 },
    { name: 'Roti Besar Naugat Kacang', result: 1.44, tgl_produksi: tglProduksi2 },
  ];

  const valueLink = [
    [270, 350, 196],
    [180, 300, 236],
    [150, 150, 96],
    [120, 150, 98],
    [150, 200, 96],
    [120, 100, 0],
    [150, 155, 96],
    [180, 175, 94],
    [210, 125, 74],
    [150, 170, 96],
    [240, 200, 68],
    [180, 450, 424],
    [150, 200, 96],
    [200, 100, 0],
    [261, 110, 57],
    [360, 270, 25],
    [405, 432, 36],
    [234, 495, 288],
    [414, 189, 1],
    [261, 100, 0],

    [116, 210, 139],
    [116, 140, 99],
    [196, 122, 98],
    [168, 148, 96],
    [146, 340, 313],
    [120, 300, 209],
    [191, 250, 159],
    [199, 110, 99],
    [159, 431, 428],
    [176, 234, 136],
    [108, 179, 99],
    [154, 220, 126],
    [146, 410, 422],
    [200, 230, 130],
    [208, 300, 226],
    [115, 320, 307],
    [109, 220, 152],
    [127, 345, 312],
    [226, 243, 108],
    [161, 240, 144],
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
