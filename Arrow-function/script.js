// function expression
const tampilNama = function (nama) {
  return `Halo, ${nama}`;
};
console.log(tampilNama("Ahmad"));

// arrow function
const tampilNama1 = (nama) => {
  return `Halo, ${nama}`;
};
console.log(tampilNama1("Maulana"));

// implisit return
const tampilNama2 = (nama) => `Halo, ${nama}`;
console.log(tampilNama2("Maulana"));

// contoh array
let mahasiswa = ["Ahmad", "Maulana", "Asep"];
let jumlahHuruf = mahasiswa.map(function (nama) {
  // function biasa
  return nama.length;
});
console.log(jumlahHuruf);

let jumlahHuruf1 = mahasiswa.map((nama) => nama.length); // arrow function
console.log(jumlahHuruf1);

// mengubah array menjadi object
let jumlahHuruf2 = mahasiswa.map((nama) => ({ nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf2);

//  konsep this pada arrow function
// constructor function
const mahasiswa1 = function () {
  this.nama = "Ahmad";
  this.umur = 17;
  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
  };
};
const Ahmad = new mahasiswa1();

// arrow function
const mahasiswa2 = function () {
  this.nama = "Ahmad";
  this.umur = 17;
  this.sayHello = () => {
    console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
  };
};
const Ahmad1 = new mahasiswa1();

// contoh kasus
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size",
    dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
