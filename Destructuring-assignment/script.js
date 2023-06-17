// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Ahmad"];
// const [salam, satu, dua, nama] = perkenalan;

// skipping items
const [salam, , , nama1] = perkenalan;
console.log(salam);

// swap items
let a = 1,
  b = 2;

console.log(a);
console.log(b);

[a, b] = [b, a];
console.log(a);
console.log(b);

// return value pada function
function coba() {
  return [1, 2];
}
const [c, d] = coba();
console.log(c);

// rest parameter
let [e, ...values] = [1, 2, 3, 4, 5];
console.log(a);
console.log(values);

// destructuring object
let mhs = {
  nama: "Ahmad",
  umur: 17,
};
let { nama, umur } = mhs;
console.log(nama);

// assignment tanpa deklarasi object
({ nama, umur } = { nama: "Ahmad", umur: 17 });
console.log(nama);

// assign ke variabel baru
let mhs1 = {
  nama: "Ahmad",
  umur: 17,
};
let { nama: n, umur: u } = mhs1;
console.log(n);

// memberikan default value
let mhs2 = {
  nama2: "Ahmad",
  umur2: 17,
  email: "ahmad@gmail.com",
};
let { nama2, umur2, email = "email@default.com" } = mhs2;
console.log(email);

// memberi nilai default + assign ke variabel baru
let mhs3 = {
  nama3: "Ahmad",
  umur3: 17,
  email3: "ahmad@gmail.com",
};
let { nama3: nm, umur3: um, email3: em = "email@default.com" } = mhs3;
console.log(em);

// rest parameter
let mhs4 = {
  nama3: "Ahmad",
  umur3: 17,
  email3: "ahmad@gmail.com",
};
let { nama3, ...value } = mhs4;
console.log(value);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
let mhs5 = {
  id: 123,
  nama3: "Ahmad",
  umur3: 17,
  email3: "ahmad@gmail.com",
};
function getIdMhs({ id }) {
  return id;
}
console.log(getIdMhs(mhs5));
