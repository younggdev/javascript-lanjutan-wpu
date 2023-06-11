function init() {
  let nama = "Ahmad";
  return (nama) => {
    console.log(nama);
  };
}
let panggilNama = init();
panggilNama("Ahmad");
panggilNama("Maulana");

function ucapkanSalam(waktu) {
  return (nama) => {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
  };
}

let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("siang");
let selamatMalam = ucapkanSalam("malam");

selamatPagi("Ahmad");
selamatMalam("Maulana");

let add = (() => {
  let counter = 0;
  return () => {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
