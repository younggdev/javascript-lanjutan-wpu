// execution context, hoisting & scope

// console.log(nama);
// var nama = "Ahmad";

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

console.log(sayHello); // tidak dijalankan
console.log(sayHello()); // dijalankan

var nama = "Ahmad";
var umur = 17;

console.log(sayHello());

function sayHello() {
  return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
}

// contoh lain
var nama1 = "Ahmad";
var username = "@ahmad_mlna01";

function cetakURL(username) {
  var instagramURL = "https://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL(username));

function satu() {
  var Nama = "Ahmad";
  console.log(Nama);
}

function dua() {
  console.log(Nama);
}

console.log(Nama);
var Nama = "Maulana";
satu();
dua("Asep");
console.log(Nama);
