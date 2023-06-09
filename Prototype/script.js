// 1. Object Literal
let mahasiswa1 = {
  nama: "Ahmad",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },
};

let mahasiswa2 = {
  nama: "Maulana",
  energi: 20,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },
};

// 2. Function Declaration
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan `);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat main`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}. selamat tidur`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let Ahmad = Mahasiswa("Ahmad", 10);
let Maulana = Mahasiswa("Maulana", 20);

// 3. Constructor Function
// keyword new
function Mahasiswa1(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan `);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat main`);
  };
}

let Ahmad1 = new Mahasiswa1("Ahmad", 10);

// 4.
