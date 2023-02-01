const dateFormat = x => {
  const d = new Date(x);
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  const year = d.getFullYear(); // 2019
  const date = d.getDate(); // 23
  const monthName = months[d.getMonth()];
  return `${date} ${monthName} ${year}`;
};
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
        tanggal: dateFormat(temp.bread.tgl_produksi),
        [name]: temp.value,
      };
    });
    result.push(tempData);
  });
  return result;
};

module.exports = dataFormat;
