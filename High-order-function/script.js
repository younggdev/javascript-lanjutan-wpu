const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);

// filter
const newAngka1 = angka.filter((a) => a >= 3);
console.log(newAngka1);

// map
// kalikan semua angka dengan 2
const newAngka2 = angka.map((a) => a * 2);
console.log(newAngka2);

// reduce
// jumlahkan seluruh elemen pada array
const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newAngka3);

// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc * cur);
console.log(hasil);
