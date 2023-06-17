// destructuring
function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(kurang);

function kalkulasi1(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { bagi, tambah, kali, kurang } = kalkulasi1(2, 3);
console.log(kurang);

// destructuring function arguments
const mhs1 = {
  nama: "Ahmad",
  umur: 17,
  email: "ahmad@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`;
// }
// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
