const moment = require('moment');
const dataFormat = datas => {
  let result = [];
  datas.forEach(data => {
    let tempData;
    data.forEach(temp => {
      const name = temp.kriteria.name;
      tempData = {
        ...tempData,
        id: temp.bread_id,
        name: temp.bread.name,
        tanggal: moment(temp.bread.tgl_produksi).format('DD-MMM-YYYY'),
        [name]: temp.value,
      };
    });
    result.push(tempData);
  });
  return result;
};

module.exports = dataFormat;
