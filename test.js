const dataBeads = [
  { id: 1, name: 'Roti Unyil Coklat', Persediaan: 270, Pesanan: 350 },
  { id: 2, name: 'Roti Unyil Keju', Persediaan: 180, Pesanan: 300 },
  { id: 3, name: 'Roti Unyil Cokelat Keju', Persediaan: 150, Pesanan: 150 },
  { id: 4, name: 'Roti Unyil Jagung Manis', Persediaan: 120, Pesanan: 150 },
  { id: 5, name: 'Roti Unyil Oreo', Persediaan: 150, Pesanan: 200 },
  { id: 6, name: 'Roti Unyil Durian', Persediaan: 120, Pesanan: 100 },
  { id: 7, name: 'Roti Unyil Pisang Cokelat', Persediaan: 150, Pesanan: 155 },
  { id: 8, name: 'Roti Unyil Pisang Keju', Persediaan: 180, Pesanan: 175 },
  { id: 9, name: 'Roti Unyil Sosis', Persediaan: 210, Pesanan: 125 },
  { id: 10, name: 'Roti Unyil Abon', Persediaan: 150, Pesanan: 170 },
  { id: 11, name: 'Roti Unyil Cream Cheese', Persediaan: 240, Pesanan: 200 },
  { id: 12, name: 'Roti Unyil Daging Asap', Persediaan: 180, Pesanan: 450 },
  { id: 13, name: 'Roti Unyil Mocca Cokelat', Persediaan: 150, Pesanan: 200 },
  { id: 14, name: 'Roti Besar Korean Garlic', Persediaan: 200, Pesanan: 100 },
  { id: 15, name: 'Roti Besar Coffee Bun', Persediaan: 261, Pesanan: 110 },
  { id: 16, name: 'Roti Besar Abon', Persediaan: 360, Pesanan: 270 },
  { id: 17, name: 'Roti Besar Cream Cheese', Persediaan: 405, Pesanan: 432 },
  { id: 18, name: 'Roti Besar Sosis', Persediaan: 234, Pesanan: 495 },
  { id: 19, name: 'Roti Besar Flower Sausage Bread', Persediaan: 414, Pesanan: 189 },
  { id: 20, name: 'Roti Besar Naugat Kacang', Persediaan: 261, Pesanan: 100 },
];
let dataBeads1 = [
  { id: 1, name: 'Roti Unyil Coklat', Persediaan: 107, Pesanan: 210 },
  { id: 2, name: 'Roti Unyil Keju', Persediaan: 116, Pesanan: 140 },
  { id: 3, name: 'Roti Unyil Cokelat Keju', Persediaan: 166, Pesanan: 122 },
  { id: 4, name: 'Roti Unyil Jagung Manis', Persediaan: 138, Pesanan: 148 },
  { id: 5, name: 'Roti Unyil Oreo', Persediaan: 116, Pesanan: 340 },
  { id: 6, name: 'Roti Unyil Durian', Persediaan: 120, Pesanan: 300 },
  { id: 7, name: 'Roti Unyil Pisang Cokelat', Persediaan: 161, Pesanan: 250 },
  { id: 8, name: 'Roti Unyil Pisang Keju', Persediaan: 169, Pesanan: 110 },
  { id: 9, name: 'Roti Unyil Sosis', Persediaan: 138, Pesanan: 431 },
  { id: 10, name: 'Roti Unyil Abon', Persediaan: 146, Pesanan: 234 },
  { id: 11, name: 'Roti Unyil Cream Cheese', Persediaan: 190, Pesanan: 179 },
  { id: 12, name: 'Roti Unyil Daging Asap', Persediaan: 105, Pesanan: 220 },
  { id: 13, name: 'Roti Unyil Mocca Cokelat', Persediaan: 116, Pesanan: 410 },
  { id: 14, name: 'Roti Besar Korean Garlic', Persediaan: 200, Pesanan: 230 },
  { id: 15, name: 'Roti Besar Coffee Bun', Persediaan: 193, Pesanan: 300 },
  { id: 16, name: 'Roti Besar Abon', Persediaan: 115, Pesanan: 320 },
  { id: 17, name: 'Roti Besar Cream Cheese', Persediaan: 109, Pesanan: 220 },
  { id: 18, name: 'Roti Besar Sosis', Persediaan: 103, Pesanan: 345 },
  { id: 19, name: 'Roti Besar Flower Sausage Bread', Persediaan: 226, Pesanan: 243 },
  { id: 20, name: 'Roti Besar Naugat Kacang', Persediaan: 161, Pesanan: 240 },
];

const dataKriteria = [
  { name: 'Persediaan', bobot: 0.2, jenis: 1 },
  { name: 'Pesanan', bobot: 0.4, jenis: 1 },
  { name: 'Produksi', bobot: 0.4, jenis: 1 },
];

const hitung = (breads, kriteria) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const fuzzy = datas => {
    const sumbu0 = 100,
      sumbu1 = 200,
      sumbu2 = 300,
      sumbu3 = 400,
      sumbu4 = 500;
    const sedikit = x => {
      if (x >= sumbu0 && x <= sumbu1) return +((x - sumbu0) / (sumbu1 - sumbu0)).toFixed(2);
      else if (x >= sumbu1 && x <= sumbu2) return +((sumbu2 - x) / (sumbu2 - sumbu1)).toFixed(2);
      else if (x <= sumbu0 || x >= sumbu2) return 0;
      else if (x == sumbu1) return 1;
    };
    const sedang = x => {
      if (x >= sumbu1 && x <= sumbu2) return +((x - sumbu1) / (sumbu2 - sumbu1)).toFixed(2);
      else if (x >= sumbu2 && x <= sumbu3) return +((sumbu3 - x) / (sumbu3 - sumbu2)).toFixed(2);
      else if (x <= sumbu1 || x >= sumbu3) return 0;
      else if (x == sumbu2) return 1;
    };
    const banyak = x => {
      if (x >= sumbu2 && x <= sumbu3) return +((x - sumbu2) / (sumbu3 - sumbu2)).toFixed(2);
      else if (x >= sumbu3 && x <= sumbu4) return +((sumbu4 - x) / (sumbu4 - sumbu3)).toFixed(2);
      else if (x <= sumbu2 || x >= sumbu3) return 0;
      else if (x == sumbu3) return 1;
    };

    const defuzzyfikasi = datas => {
      return datas.map(data => {
        const id = data.id;
        const name = data.name;
        const rr1 = 10,
          rr2 = 10,
          rr3 = 70,
          rr4 = 10,
          rr5 = 50,
          rr6 = 200,
          rr7 = 70,
          rr8 = 170,
          rr9 = 350;

        const rrr1 = 10,
          rrr2 = 45,
          rrr3 = 8,
          rrr4 = 35,
          rrr5 = 45,
          rrr6 = 45,
          rrr7 = 50,
          rrr8 = 105,
          rrr9 = 50;

        const sedikit = r => 100 - r * 5;
        const Zsedang = r => 100 - r * 5;

        const r1 = Math.min(data.persediaan.banyak, data.pesanan.sedikit); //sedikit
        const z1 = r1 > 0 ? +(rr1 - r1 * rrr1).toFixed(2) : 0;
        const r2 = Math.min(data.persediaan.sedang, data.pesanan.sedikit); //sedikit
        const z2 = r2 > 0 ? +(rr2 + r2 * rrr2).toFixed(2) : 0;
        const r3 = Math.min(data.persediaan.sedikit, data.pesanan.sedikit); //sedikit
        const z3 = r3 > 0 ? +(rr3 - r3 * rrr3).toFixed(2) : 0;
        const r4 = Math.min(data.persediaan.banyak, data.pesanan.sedang); //sedikit
        const z4 = r4 > 0 ? +(rr4 + r4 * rrr4).toFixed(2) : 0;
        const r5 = Math.min(data.persediaan.sedang, data.pesanan.sedang); //sedikit
        const z5 = r5 > 0 ? +(rr5 - r5 * rrr5).toFixed(2) : 0;
        const r6 = Math.min(data.persediaan.sedikit, data.pesanan.sedang); //sedang
        const z6 = r6 > 0 ? +(rr6 + r6 * rrr6).toFixed(2) : 0;
        const r7 = Math.min(data.persediaan.banyak, data.pesanan.banyak); //sedikit
        const z7 = r7 > 0 ? +(rr7 - r7 * rrr7).toFixed(2) : 0;
        const r8 = Math.min(data.persediaan.sedang, data.pesanan.banyak); //sedang
        const z8 = r8 > 0 ? +(rr8 + r8 * rrr8).toFixed(2) : 0;
        const r9 = Math.min(data.persediaan.sedikit, data.pesanan.banyak); //banyak
        const z9 = r9 > 0 ? +(rr9 + r9 * rrr9).toFixed(2) : 0;

        let res1 = 0;
        let res2 = 0;
        for (let i = 1; i < 10; i++) {
          res1 += eval(`r${i}`) * eval(`z${i}`);
          res2 += eval(`r${i}`);
        }

        res1 = parseFloat(res1.toFixed(2));
        res2 = parseFloat(res2.toFixed(2));
        const res = Math.round(res1 / res2) || 0;

        return { id, name, r1, z1, r2, z2, r3, z3, r4, z4, r5, z5, r6, z6, r7, z7, r8, z8, r9, z9, res1, res2, res };
      });
    };

    const keanggotaan = datas.map((data, i) => {
      return {
        id: data.id,
        name: data.name,
        persediaan: {
          sedikit: sedikit(data.Persediaan),
          sedang: sedang(data.Persediaan),
          banyak: banyak(data.Persediaan),
        },
        pesanan: {
          sedikit: sedikit(data.Pesanan),
          sedang: sedang(data.Pesanan),
          banyak: banyak(data.Pesanan),
        },
      };
    });
    // console.log(keanggotaan);
    // console.log(defuzzyfikasi(keanggotaan));

    return {
      keanggotaan,
      defuzzyfikasi: defuzzyfikasi(keanggotaan),
    };
    // console.log(keanggotaan);
    // console.log(defuzzyfikasi(keanggotaan));
  };

  const waspas = datas => {
    const resultNormalisasi = (arr, kriteria) => {
      const param = kriteria.name;
      const bobot = kriteria.bobot;
      const matrix = arr.map(val => val[param]);
      const sumbuX = kriteria.jenis === 1 ? Math.max(...matrix) : Math.min(...matrix);
      const normalisasi = matrix.map(x => +(x / sumbuX).toFixed(2));
      const q = normalisasi.map(e => {
        const q1 = +(e * bobot).toFixed(2);
        const q2 = +Math.pow(e, bobot).toFixed(2);
        return { q1, q2 };
      });
      return { matrix, sumbuX, normalisasi, q };
    };
    const data = datas.map(data => {
      const array = Object.values(data);
      return array.slice(2, array.length);
    });
    const matrix1 = data.map(matrix => {
      return matrix.join('&');
    });
    // console.log(matrix1);
    const matrixD = kriteria.map(kriteria => {
      return resultNormalisasi(datas, kriteria);
    });
    const lengthI = matrixD[0].normalisasi.length;
    const lengthJ = matrixD.length;
    const newMatrix2 = new Array(lengthI).fill(0).map(() => new Array(lengthJ).fill(0));
    const newMatrixQ = new Array(lengthI).fill(0).map(() => new Array(lengthJ).fill(0));

    matrixD.forEach((el, i) => {
      el.normalisasi.forEach((element, j) => {
        newMatrix2[j][i] = element;
      });
      el.q.forEach((element, j) => {
        newMatrixQ[j][i] = element;
      });
    });
    const matrix2 = newMatrix2.map(matrix => {
      return matrix.join('&');
    });
    const hasil = newMatrixQ.map((matrix, i) => {
      const lokasi = datas[i];
      const q1 = +(0.5 * matrix.map(e => e.q1).reduce(reducer)).toFixed(2);
      const q2 = +(0.5 * matrix.map(e => e.q2).reduce(reducer)).toFixed(2);
      const q = +(q1 + q2).toFixed(2);
      return { id: lokasi.id, name: lokasi.name, q1, q2, q };
    });
    hasil.sort((a, b) => b.q - a.q);
    return {
      matrix1: matrix1.join('\\\\'),
      matrix2: matrix2.join('\\\\'),
      perhitungan: matrixD,
      hasil,
    };
  };
  const hasilFuzzi = fuzzy(breads);
  breads = breads.map(el => {
    const Produksi = hasilFuzzi.defuzzyfikasi.find(def => def.id == el.id).res;
    return { ...el, Produksi };
  });
  const hasilWaspas = waspas(breads);
  return { fuzzy: hasilFuzzi, waspas: hasilWaspas, breads };
};

const a = hitung(dataBeads, dataKriteria);
// const b = hitung(dataBeads1, dataKriteria);
// console.log(hitung(dataBeads, dataKriteria));
const a1 = new Date();
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
console.log(dateFormat('2023-01-23'));
