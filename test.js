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
  { id: 21, name: 'Roti Besar Naugat Kacang', Persediaan: 127, Pesanan: 200 },
  { id: 22, name: 'Roti Besar Naugat Kacang', Persediaan: 101, Pesanan: 200 },
  // { id: 22, name: 'Roti Besar Naugat Kacang', Persediaan: 102, Pesanan: 490 },
];
let dataBeads1 = [
  { id: 1, name: 'Roti Unyil Coklat', Pesanan: 210 },
  { id: 2, name: 'Roti Unyil Keju', Pesanan: 140 },
  { id: 3, name: 'Roti Unyil Cokelat Keju', Pesanan: 122 },
  { id: 4, name: 'Roti Unyil Jagung Manis', Pesanan: 148 },
  { id: 5, name: 'Roti Unyil Oreo', Pesanan: 340 },
  { id: 6, name: 'Roti Unyil Durian', Pesanan: 300 },
  { id: 7, name: 'Roti Unyil Pisang Cokelat', Pesanan: 250 },
  { id: 8, name: 'Roti Unyil Pisang Keju', Pesanan: 110 },
  { id: 9, name: 'Roti Unyil Sosis', Pesanan: 431 },
  { id: 10, name: 'Roti Unyil Abon', Pesanan: 234 },
  { id: 11, name: 'Roti Unyil Cream Cheese', Pesanan: 179 },
  { id: 12, name: 'Roti Unyil Daging Asap', Pesanan: 220 },
  { id: 13, name: 'Roti Unyil Mocca Cokelat', Pesanan: 410 },
  { id: 14, name: 'Roti Besar Korean Garlic', Pesanan: 230 },
  { id: 15, name: 'Roti Besar Coffee Bun', Pesanan: 300 },
  { id: 16, name: 'Roti Besar Abon', Pesanan: 320 },
  { id: 17, name: 'Roti Besar Cream Cheese', Pesanan: 220 },
  { id: 18, name: 'Roti Besar Sosis', Pesanan: 345 },
  { id: 19, name: 'Roti Besar Flower Sausage Bread', Pesanan: 243 },
  { id: 20, name: 'Roti Besar Naugat Kacang', Pesanan: 240 },
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
    // =IF(AND(D13>=$H$1;D13<=$H$2);((D13-$H$1)/($H$2-$H$1));IF(AND(D13>=$H$2;D13<=$H$3);(($H$3-D13)/($H$3-$H$2));IF(OR(D13<=$H$1;D13>=$H$3);0;1)))

    const sedang = x => {
      if (x >= sumbu1 && x <= sumbu2) return +((x - sumbu1) / (sumbu2 - sumbu1)).toFixed(2);
      else if (x >= sumbu2 && x <= sumbu3) return +((sumbu3 - x) / (sumbu3 - sumbu2)).toFixed(2);
      else if (x <= sumbu1 || x >= sumbu3) return 0;
      else if (x == sumbu2) return 1;
    };
    // =IF(AND(D13>=$H$2;D13<=$H$3);((D13-$H$2)/($H$3-$H$2));IF(AND(D13>=$H$3;D13<=$H$4);(($H$4-D13)/($H$4-$H$3));IF(OR(D13<=$H$2;D13>=$H$4);0;1)))

    const banyak = x => {
      if (x >= sumbu2 && x <= sumbu3) return +((x - sumbu2) / (sumbu3 - sumbu2)).toFixed(2);
      else if (x >= sumbu3 && x <= sumbu4) return +((sumbu4 - x) / (sumbu4 - sumbu3)).toFixed(2);
      else if (x <= sumbu2 || x >= sumbu4) return 0;
      else if (x == sumbu3) return 1;
    };

    // =IF(AND(D13>=$H$3;D13<=$H$4);((D13-$H$3)/($H$4-$H$3));IF(AND(D13>=$H$4;D13<=$H$5);(($H$5-D13)/($H$5-$H$4));IF(OR(D13<=$H$3;D13>=$H$4);0;1)))

    const defuzzyfikasi = datas => {
      return datas.map(data => {
        const id = data.id;
        const name = data.name;
        const rr1 = 10,
          rr2 = 10,
          rr3 = 100,
          rr4 = 10,
          rr5 = 50,
          rr6 = 200,
          rr7 = 70,
          rr8 = 170,
          rr9 = 399;

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
        // console.log(res1, res2, res);

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
    // console.log(matrix2);
    const hasil = newMatrixQ.map((matrix, i) => {
      const lokasi = datas[i];
      const q1 = +(0.5 * matrix.map(e => e.q1).reduce(reducer)).toFixed(2);
      const q2 = +(0.5 * matrix.map(e => e.q2).reduce(reducer)).toFixed(2);
      const q = +(q1 + q2).toFixed(2);
      return { id: lokasi.id, name: lokasi.name, q1, q2, q };
    });
    // hasil.sort((a, b) => b.q - a.q);
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
  // console.log(hasilWaspas.hasil)
  breads = hasilWaspas.hasil.map(el => {
    const find = breads.find(def => def.id == el.id);
    let sisa = find.Persediaan + find.Produksi - find.Pesanan;
    sisa = sisa < 101 ? sisa + 100 : sisa;
    return {
      name: find.name,
      Persediaan: find.Persediaan,
      Pesanan: find.Pesanan,
      Produksi: find.Produksi,
      q: el.q,
      sisa,
    };
  });
  const dataLaporan = breads.map(el => ({ name: el.name, result: el.q }));
  const link = breads.map(el => [el.Persediaan, el.Pesanan, el.Produksi]);
  // console.table(breads);
  console.log(dataLaporan);
  console.log(link);
  return { fuzzy: hasilFuzzi, waspas: hasilWaspas, breads };
};

const a = hitung(dataBeads, dataKriteria);
dataBeads1 = dataBeads1.map(el => {
  const find = a.breads.find(e => e.name == el.name);
  return { ...el, Persediaan: find.sisa };
});
const a1 = hitung(dataBeads1, dataKriteria);
// console.log(a);
