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
    delete el.tanggal;
    return { ...el, Produksi };
  });
  const hasilWaspas = waspas(breads);
  return { fuzzy: hasilFuzzi, waspas: hasilWaspas, breads };
};

module.exports = hitung;
