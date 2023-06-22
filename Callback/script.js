// // // callback
// // // synchronous callback
// // // function halo(nama) {
// // //   alert(`halo, ${nama}`);
// // // }
// // // function tampilPesan(callback) {
// // //   const nama = prompt("Masukkan nama : ");
// // //   callback(nama);
// // // }
// // // tampilPesan((nama) => {
// // //   alert(`halo, ${nama}`);
// // // });

// const mhs = [
//   {
//     nama: "Ahmad",
//     nrp: "123456789",
//     email: "ahmad@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDodenWali: 1,
//   },
//   {
//     nama: "Maulana",
//     nrp: "123456789",
//     email: "maulana@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDodenWali: 2,
//   },
//   {
//     nama: "Asep",
//     nrp: "123456789",
//     email: "asep@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDodenWali: 3,
//   },
// ];

// // console.log("mulai");
// // mhs.forEach((m) => console.log(m.nama));
// // console.log("selesai");

// // asynchronous callback
// function getDataMahasiswa(url, succes, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         succes(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "mahasiswa.json",
//   (results) => {
//     // console.log(JSON.parse(results));
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

// JQuery
console.log("Mulai");
$.ajax({
  url: "mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("Selesai");
