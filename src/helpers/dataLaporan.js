const models = require('../models');

const criterias = async () => {
  const createdAt = new Date();
  const updatedAt = new Date();

  const dataBreads = [
    { name: 'Roti Unyil Coklat', result: 2.37 },
    { name: 'Roti Unyil Keju', result: 2.06 },
    { name: 'Roti Unyil Jagung Manis', result: 1.8 },
    { name: 'Roti Sari rasa Korean Garlic', result: 1.8 },
    { name: 'Roti Sari rasa Coffee Bun', result: 1.76 },
    { name: 'Roti Sari rasa Flower Sausage Bread', result: 1.7 },
    { name: 'Roti Bantal', result: 1.67 },
    { name: 'Roti Sobek', result: 1.62 },
    { name: 'Roti Sisir', result: 1.49 },
    { name: 'Roti Tawar', result: 1 },
  ];
  const valueLink = [
    [49, 90, 54000, 57],
    [106, 10, 6000, 0],
    [45, 60, 36000, 36],
    [30, 80, 200000, 86],
    [60, 40, 100000, 15],
    [80, 25, 62000, 3],
    [35, 20, 80000, 29],
    [50, 25, 100000, 19],
    [40, 25, 100000, 10],
    [40, 30, 120000, 27],
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
