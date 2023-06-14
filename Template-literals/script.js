// template literals / template string
const nama = "Ahmad";
const umur = 17;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);

// embedded expressions
console.log(`${1 + 1}`);
// console.log(`${alert("halo")}`);

const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// html fragment
const mhs = {
  nama: "Ahmad",
  umur: 17,
  nrp: "098765432",
  email: "ahmad@gmail.com",
};

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;
console.log(el);
